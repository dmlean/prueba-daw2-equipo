'use strict';

(() => {
  const app = document.getElementById('app');
  const scenario = document.getElementById('scenarioSelect');
  const errorSwitch = document.getElementById('simulateError');
  const statuses = { todo: 'Per fer', progress: 'En progrés', done: 'Feta' };
  const people = { a: 'Membre A', b: 'Membre B' };
  let state;
  let toastTimer;
  let dragId = null;
  let route;

  const escape = value => String(value ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  const icon = name => {
    const paths = {
      arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
      back: '<path d="M19 12H5m5-5-5 5 5 5"/>',
      grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
      board: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16m6-16v16"/>',
      people: '<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2m1-15a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4v2"/>',
      plus: '<path d="M12 5v14M5 12h14"/>',
      check: '<path d="m5 12 4 4L19 6"/>',
      info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.2"/>',
      edit: '<path d="m14 4 6 6M4 20l5-1L21 7l-4-4L5 15z"/>',
      lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/>'
    };
    return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.info}</svg>`;
  };
  const badge = status => `<span class="badge badge-${status === 'todo' ? 'todo' : status === 'progress' ? 'progress' : 'done'}">${statuses[status]}</span>`;
  const ownerName = task => task.owner ? people[task.owner] : 'Sense responsable';
  const projectForTask = task => state.projects.find(project => project.id === task.project);
  const isAdmin = project => project.creator === state.actor;
  const canChangeStatus = task => task.owner === state.actor && task.status !== 'done';
  const link = (label, href, classes = 'button button-secondary', symbol = '') => `<a class="${classes}" href="#${href}">${symbol ? icon(symbol) : ''}${label}</a>`;

  function reset() {
    state = {
      actor: 'b', session: false, mobileColumn: 'todo', nextId: 4,
      projects: [
        { id: 'p1', name: 'Portal del taller', creator: 'a', members: ['a', 'b'] },
        { id: 'p2', name: 'Guia del barri', creator: 'b', members: ['a', 'b'] }
      ],
      tasks: [
        { id: 't1', project: 'p1', title: 'Revisar els textos', type: 'Documentació', owner: null, status: 'todo' },
        { id: 't2', project: 'p1', title: 'Dissenyar l’accés', type: 'Disseny', owner: 'b', status: 'progress' },
        { id: 't3', project: 'p1', title: 'Definir la paleta', type: 'Disseny', owner: 'a', status: 'done' }
      ],
      types: ['Documentació', 'Disseny', 'Desenvolupament']
    };
    scenario.value = 'b';
    errorSwitch.checked = false;
    dragId = null;
  }

  function notify(message) {
    const feedback = document.getElementById('feedback');
    clearTimeout(toastTimer);
    feedback.textContent = message;
    feedback.hidden = false;
    toastTimer = setTimeout(() => { feedback.hidden = true; }, 6000);
  }

  function parseRoute() {
    const parts = location.hash.slice(1).split('/');
    const name = parts[0] || 'acces';
    const id = parts[1];
    const task = state.tasks.find(t => t.id === id);
    const project = name.startsWith('tasca') && task ? projectForTask(task) : state.projects.find(p => p.id === id);
    return { name, id, task, project };
  }

  function navigate(hash) {
    if (location.hash === `#${hash}`) render({ focusHeading: true });
    else location.hash = hash;
  }

  function field(id, label, value = '', type = 'text', hint = '', required = true) {
    return `<div class="field"><label for="${id}">${label}${required ? '<span class="required-mark" aria-hidden="true"> *</span>' : ''}</label><input id="${id}" name="${id}" type="${type}" value="${escape(value)}" ${required ? 'required' : ''} aria-describedby="${id}-hint ${id}-error" ${type === 'password' ? 'autocomplete="off"' : ''}>${hint ? `<p class="hint" id="${id}-hint">${hint}</p>` : `<span id="${id}-hint"></span>`}<p class="error-text" id="${id}-error" hidden></p></div>`;
  }

  function formError() {
    return '<div class="notice notice-error" id="form-error" role="alert" hidden></div>';
  }

  function pageHeader(kicker, title, summary, actions = '') {
    return `<header class="page-header"><div><p class="kicker">${kicker}</p><h1 id="page-title" tabindex="-1">${escape(title)}</h1>${summary ? `<p>${summary}</p>` : ''}</div>${actions ? `<div class="page-actions">${actions}</div>` : ''}</header>`;
  }

  function shell(content, project = null) {
    const navLink = (text, name, href, symbol) => `<a class="nav-link ${route.name === name || (name === 'projectes' && route.name === 'projecte-nou') ? 'is-active' : ''}" href="#${href}" ${route.name === name ? 'aria-current="page"' : ''}>${icon(symbol)}<span>${text}</span></a>`;
    const sidebar = `<aside class="sidebar"><a class="brand" href="#projectes"><img src="recursos/logo-principal.svg" alt="Trama" width="174" height="54"></a><nav aria-label="Navegació principal">${navLink('Els teus projectes', 'projectes', 'projectes', 'grid')}${project ? `<p class="nav-section">${escape(project.name)}</p>${navLink('Tauler Kanban', 'kanban', `kanban/${project.id}`, 'board')}${navLink('Col·laboradors', 'collaboradors', `collaboradors/${project.id}`, 'people')}` : ''}</nav><div class="sidebar-footer"><strong>Una base compartida</strong><p>Projectes, persones i tasques en un mateix fil.</p><a class="text-link" href="#acces" data-action="logout">Tanca la sessió</a></div></aside>`;
    const mobileNav = project ? `<nav class="mobile-project-nav" aria-label="Vistes del projecte">${link('Tauler Kanban', `kanban/${project.id}`, route.name === 'kanban' ? 'is-active' : '')}${link('Col·laboradors', `collaboradors/${project.id}`, route.name === 'collaboradors' ? 'is-active' : '')}</nav>` : '';
    const context = project ? `${escape(project.name)}` : 'Espai de treball';
    const role = project ? (isAdmin(project) ? 'Administrador del projecte' : 'Membre del projecte') : 'Equip d’exemple';
    return `<div class="app-shell">${sidebar}<div class="workspace"><header class="topbar"><div class="breadcrumb"><a href="#projectes">Projectes</a><span aria-hidden="true">/</span><span>${context}</span></div><div class="profile"><span class="avatar" aria-hidden="true">${state.actor.toUpperCase()}</span><div><strong>${people[state.actor]}</strong><span>${role}</span></div></div></header>${mobileNav}<main id="contingut" class="page">${content}<p class="footer-note">Trama · Un fil clar per al treball compartit</p></main></div></div>`;
  }

  function auth(register = false) {
    const title = register ? 'Crea un compte' : 'Inicia la sessió';
    const fields = `${register ? field('name', 'Nom visible', '', 'text', 'El nom amb què et reconeixerà l’equip.') : ''}${field('email', 'Correu electrònic', '', 'email')}${field('password', 'Contrasenya', '', 'password')}`;
    const story = `<section class="auth-story"><img class="brand" src="recursos/logo-invers.svg" alt="Trama" width="194" height="60"><p class="kicker">Projectes · Persones · Tasques</p><h2>El projecte, a la vista.<br>La feina, al seu lloc.</h2><p>Reconeix el projecte, troba cada responsable i segueix el fil de les tasques.</p><div class="story-list"><div>${badge('todo')}<span>Entén què queda per començar.</span></div><div>${badge('progress')}<span>Localitza la feina en curs.</span></div><div>${badge('done')}<span>Distingeix les tasques acabades.</span></div></div><p class="scope-note">Una eina de gestió de projectes per a equips que treballen plegats.</p></section>`;
    return `<div class="app-shell auth-shell"><main id="contingut" class="auth-layout">${story}<section class="auth-panel"><img class="brand" src="recursos/logo-principal.svg" alt="Trama" width="174" height="54"><p class="kicker">${register ? 'Comença a organitzar-te' : 'Torna al teu equip'}</p><h1 id="page-title" tabindex="-1">${title}</h1><p>${register ? 'Un espai per reconèixer els projectes i coordinar les tasques.' : 'Entra per trobar els teus projectes i continuar la feina.'}</p><form id="${register ? 'register-form' : 'login-form'}" class="form-stack" novalidate>${formError()}${fields}<p class="hint">Els camps amb * són obligatoris.</p><button type="submit" class="button button-primary">${title}${icon('arrow')}</button><button type="button" class="button button-secondary" data-action="fill-auth">Omple amb dades d’exemple</button></form><p class="auth-alternative">${register ? 'Ja tens un compte?' : 'Encara no tens un compte?'} ${link(register ? 'Inicia la sessió' : 'Crea un compte', register ? 'acces' : 'registre', 'text-link')}</p><p class="scope-note">Utilitza les dades d’exemple per revisar l’entrada al prototip.</p></section></main></div>`;
  }

  function projects() {
    const cards = state.projects.filter(project => project.members.includes(state.actor)).map(project => {
      const tasks = state.tasks.filter(task => task.project === project.id);
      const open = tasks.filter(task => task.status !== 'done').length;
      return `<article class="project-card"><div class="project-card-head"><span class="project-mark" aria-hidden="true">${icon('board')}</span><span class="pill">${isAdmin(project) ? 'Administrador' : 'Membre'}</span></div><h2>${link(escape(project.name), `kanban/${project.id}`, 'project-title')}</h2><p class="project-description">${project.id === 'p1' ? 'Disseny i continguts del portal compartit.' : project.id === 'p2' ? 'Un punt de trobada per ordenar els continguts del barri.' : 'Un nou espai per organitzar el treball compartit.'}</p><div class="project-meta"><span>${icon('people')}${project.members.length} ${project.members.length === 1 ? 'col·laborador' : 'col·laboradors'}</span><span>${open} ${open === 1 ? 'tasca oberta' : 'tasques obertes'}</span></div><div class="project-card-foot">${link('Obre el projecte', `kanban/${project.id}`, 'button button-text', 'arrow')}</div></article>`;
    }).join('');
    return shell(`${pageHeader('Espai de treball', 'Els teus projectes', 'Tria el projecte i segueix el fil de la feina.', link('Crea un projecte', 'projecte-nou', 'button button-primary', 'plus'))}<section class="project-grid" aria-label="Projectes disponibles">${cards}</section><section class="selection-note">${icon('info')}<p>El rol es defineix dins de cada projecte. Qui el crea n’és l’administrador.</p></section>`);
  }

  function newProject() {
    return shell(`${link('Torna als projectes', 'projectes', 'back-link', 'back')}${pageHeader('Un nou fil de treball', 'Crea un projecte', 'Un nom clar ajuda l’equip a trobar l’espai adequat.')}<div class="two-column"><section class="panel"><form id="project-form" class="form-stack" novalidate>${formError()}${field('project-name', 'Nom del projecte', '', 'text', 'Per exemple: Arxiu del taller.')}<div class="notice notice-info">${icon('people')}<p>Crearàs el projecte com a <strong>${people[state.actor]}</strong> i en seràs l’administrador.</p></div><div class="form-actions"><button class="button button-primary" type="submit">Crea el projecte</button>${link('Cancel·la', 'projectes')}</div></form></section><aside class="panel muted-panel"><h2>Comença amb una base clara</h2><p>El projecte agrupa els col·laboradors i les tasques. Els estats permeten reconèixer què està per fer, en progrés o acabat.</p><div class="status-examples">${badge('todo')}${badge('progress')}${badge('done')}</div></aside></div>`);
  }

  function stateOptions(task) {
    return Object.entries(statuses).map(([value, label]) => `<option value="${value}" ${task.status === value ? 'selected' : ''}>${label}</option>`).join('');
  }

  function taskCard(task) {
    const owned = task.owner === state.actor;
    const editableState = canChangeStatus(task);
    return `<article class="task-card" data-task-id="${task.id}" ${editableState ? 'draggable="true"' : ''}><div class="task-card-top"><span class="task-type">${escape(task.type)}</span>${badge(task.status)}</div><h3 class="task-title"><a id="task-link-${task.id}" href="#tasca/${task.id}" draggable="false">${escape(task.title)}</a></h3><div class="task-owner"><span class="avatar avatar-small" aria-hidden="true">${task.owner ? task.owner.toUpperCase() : '—'}</span><span>${ownerName(task)}</span></div>${editableState ? `<div class="task-footer"><label for="status-${task.id}">Canvia l’estat</label><select id="status-${task.id}" data-action="state" data-task-id="${task.id}" aria-label="Estat de ${escape(task.title)}">${stateOptions(task)}</select></div>` : task.status === 'done' ? '<div class="task-footer final-state"><span>Estat final</span>'+icon('lock')+'</div>' : !owned ? `<div class="task-footer">${!task.owner ? `<button class="button button-text button-small" type="button" data-action="self-assign" data-task-id="${task.id}">Assigna’m la tasca</button>` : link('Revisa la tasca', `tasca/${task.id}`, 'button button-text button-small')}</div>` : ''}</article>`;
  }

  function kanban(project) {
    const tasks = state.tasks.filter(task => task.project === project.id);
    const tabs = Object.entries(statuses).map(([key, name]) => `<button class="kanban-tab ${state.mobileColumn === key ? 'is-active' : ''}" type="button" data-action="column" data-column="${key}" aria-pressed="${state.mobileColumn === key}" aria-controls="column-${key}">${name}<span>${tasks.filter(task => task.status === key).length}</span></button>`).join('');
    const columns = Object.entries(statuses).map(([key, name]) => {
      const selected = tasks.filter(task => task.status === key);
      return `<section id="column-${key}" class="board-column ${state.mobileColumn === key ? 'is-current' : ''}" data-column="${key}" aria-label="${name}"><header class="column-heading"><h2>${name}</h2><span class="column-count" aria-label="${selected.length} tasques">${selected.length}</span></header><div class="task-list">${selected.length ? selected.map(taskCard).join('') : '<div class="empty-state"><p>Encara no hi ha tasques en aquest estat.</p></div>'}</div></section>`;
    }).join('');
    return shell(`${pageHeader('Tauler del projecte', project.name, 'Responsables visibles, estats clars i una acció per continuar.', link('Crea una tasca', `tasca-nova/${project.id}`, 'button button-primary', 'plus'))}<div class="kanban-tools"><p>${tasks.length} ${tasks.length === 1 ? 'tasca' : 'tasques'} · ${project.members.length} ${project.members.length === 1 ? 'col·laborador' : 'col·laboradors'}</p><p class="hint">Les tasques que tens assignades es poden moure o actualitzar amb el selector d’estat.</p></div><div class="kanban-tabs" role="group" aria-label="Columna del tauler">${tabs}</div><div class="board">${columns}</div>`, project);
  }

  function collaborators(project) {
    const rows = project.members.map(person => `<tr><td data-label="Col·laborador"><div class="member-cell"><span class="avatar" aria-hidden="true">${person.toUpperCase()}</span><div class="member-info"><strong>${people[person]}</strong>${person === state.actor ? '<span>El teu perfil</span>' : ''}</div></div></td><td data-label="Rol"><span class="pill">${project.creator === person ? 'Administrador' : 'Membre'}</span></td><td data-label="Relació">${project.creator === person ? 'Creador del projecte' : 'Col·laborador'}</td></tr>`).join('');
    return shell(`${pageHeader('L’equip del projecte', 'Col·laboradors', `Reconeix qui forma part de «${escape(project.name)}» i quin rol hi té.`)}<section class="panel table-panel"><div class="table-scroll"><table class="collaborators-table"><caption class="sr-only">Col·laboradors de ${escape(project.name)}</caption><thead><tr><th scope="col">Col·laborador</th><th scope="col">Rol</th><th scope="col">Relació amb el projecte</th></tr></thead><tbody>${rows}</tbody></table></div></section><div class="two-column rules-grid"><section class="panel"><h2>Administració</h2><p>El creador administra el projecte i pot assignar tasques als altres membres.</p></section><section class="panel"><h2>Col·laboració</h2><p>Els membres gestionen tasques i poden autoassignar-se. Els canvis d’estat respecten les responsabilitats.</p></section></div>`, project);
  }

  function detail(task) {
    const project = projectForTask(task);
    const stateControl = canChangeStatus(task) ? `<div class="field"><label for="detail-status">Canvia l’estat</label><select id="detail-status" data-action="state" data-task-id="${task.id}">${stateOptions(task)}</select><p class="hint">Ets responsable d’aquesta tasca.</p></div>` : task.status === 'done' ? `<div class="notice notice-info">${icon('lock')}<p>La tasca és feta. No se’n pot canviar l’estat.</p></div>` : `<p class="hint">En aquest recorregut, el canvi d’estat es mostra a la persona responsable.</p>`;
    return shell(`${link('Torna al tauler', `kanban/${project.id}`, 'back-link', 'back')}${pageHeader('Detall de la tasca', task.title, '', link('Edita la tasca', `tasca-edita/${task.id}`, 'button button-secondary', 'edit'))}<div class="detail-layout"><section class="panel detail-main"><div class="detail-status-row">${badge(task.status)}<span class="task-type">${escape(task.type)}</span></div><h2>Una tasca dins del projecte</h2><dl class="definition-list"><div><dt>Projecte</dt><dd>${escape(project.name)}</dd></div><div><dt>Responsable</dt><dd>${ownerName(task)}</dd></div><div><dt>Tipus</dt><dd>${escape(task.type)}</dd></div><div><dt>Estat</dt><dd>${statuses[task.status]}</dd></div></dl>${task.owner !== state.actor ? `<button class="button button-secondary" data-action="self-assign" data-task-id="${task.id}" type="button">Assigna’m la tasca</button>` : `<div class="notice notice-success">${icon('check')}<p>Tens aquesta tasca assignada.</p></div>`}</section><aside class="panel detail-side"><h2>Estat i responsabilitat</h2>${stateControl}<p>El responsable apareix al costat de la tasca per ajudar l’equip a coordinar-se.</p>${isAdmin(project) ? `<p class="hint">Com a administrador, pots canviar el responsable des del formulari d’edició.</p>` : `<p class="hint">L’assignació a altres membres està reservada a l’administrador del projecte.</p>`}</aside></div>`, project);
  }

  function taskForm(project, task = null) {
    const edit = Boolean(task);
    const value = task || { title: '', type: 'Documentació', owner: null, status: 'todo' };
    const ownerField = isAdmin(project) ? `<div class="field"><label for="task-owner">Responsable</label><select id="task-owner" name="task-owner"><option value="">Sense responsable</option>${project.members.map(id => `<option value="${id}" ${value.owner === id ? 'selected' : ''}>${people[id]}</option>`).join('')}</select><p class="hint">L’administrador pot assignar la tasca a qualsevol membre del projecte.</p></div>` : `<div class="field"><span class="field-label">Responsable</span><div class="readonly-field">${ownerName(value)}</div>${value.owner !== state.actor ? `<label class="checkbox-label" for="task-self"><input id="task-self" name="task-self" type="checkbox">Assigna’m la tasca</label>` : ''}<p class="hint">L’assignació a altres membres està reservada a l’administrador del projecte.</p></div>`;
    const statusField = edit && canChangeStatus(task) ? `<div class="field"><label for="task-state">Estat</label><select id="task-state" name="task-state">${stateOptions(task)}</select></div>` : `<div class="field"><span class="field-label">Estat</span><div class="readonly-field">${badge(value.status)}</div>${value.status === 'done' ? '<p class="hint">Aquest estat és final. Pots revisar els altres camps sense reobrir la tasca.</p>' : `<p class="hint">${edit ? 'El canvi d’estat es mostra a la persona responsable en aquest recorregut.' : 'La tasca nova començarà a «Per fer».'}</p>`}</div>`;
    const form = `<section class="panel"><form id="task-form" class="form-stack" novalidate data-project-id="${project.id}" ${edit ? `data-task-id="${task.id}"` : ''}>${formError()}${field('task-title', 'Títol', value.title, 'text', 'Descriu què cal fer amb una frase clara.')}<div class="field"><label for="task-type">Tipus <span class="required-mark" aria-hidden="true">*</span></label><select id="task-type" name="task-type" required>${state.types.map(type => `<option value="${escape(type)}" ${value.type === type ? 'selected' : ''}>${escape(type)}</option>`).join('')}</select><p class="hint">Catàleg de tipus d’exemple del projecte.</p></div>${ownerField}${statusField}<div class="form-actions"><button class="button button-primary" type="submit">${edit ? 'Desa la tasca' : 'Crea la tasca'}</button>${link('Cancel·la', edit ? `tasca/${task.id}` : `kanban/${project.id}`)}</div></form></section>`;
    return shell(`${link(edit ? 'Torna a la tasca' : 'Torna al tauler', edit ? `tasca/${task.id}` : `kanban/${project.id}`, 'back-link', 'back')}${pageHeader('Treball amb context', edit ? 'Edita la tasca' : 'Crea una tasca', `Projecte: ${escape(project.name)}`)}<div class="two-column form-layout">${form}<aside class="panel muted-panel"><h2>Una lectura compartida</h2><p>El títol explica la feina. El tipus l’identifica, el responsable orienta l’equip i l’estat mostra en quin punt es troba.</p><div class="status-examples">${badge('todo')}${badge('progress')}${badge('done')}</div><p class="hint">Els estats sempre porten text. «Feta» bloqueja els nous canvis d’estat.</p></aside></div>`, project);
  }

  function render(options = {}) {
    route = parseRoute();
    if (['kanban', 'collaboradors', 'tasca-nova'].includes(route.name) && !route.project || ['tasca', 'tasca-edita'].includes(route.name) && !route.task) {
      navigate('projectes'); notify('No s’ha trobat aquest element. Tria un projecte de la mostra.'); return;
    }
    if (route.project && !route.project.members.includes(state.actor)) {
      navigate('projectes'); notify('Aquest perfil no forma part d’aquest projecte.'); return;
    }
    switch (route.name) {
      case 'acces': app.innerHTML = auth(); break;
      case 'registre': app.innerHTML = auth(true); break;
      case 'projectes': app.innerHTML = projects(); break;
      case 'projecte-nou': app.innerHTML = newProject(); break;
      case 'kanban': app.innerHTML = kanban(route.project); break;
      case 'collaboradors': app.innerHTML = collaborators(route.project); break;
      case 'tasca': app.innerHTML = detail(route.task); break;
      case 'tasca-edita': app.innerHTML = taskForm(route.project, route.task); break;
      case 'tasca-nova': app.innerHTML = taskForm(route.project); break;
      default: navigate('acces'); return;
    }
    document.title = `Trama · ${document.getElementById('page-title')?.textContent || 'Prototip de disseny'}`;
    document.getElementById('contingut').tabIndex = -1;
    if (options.focusId) (document.getElementById(options.focusId) || document.getElementById('page-title'))?.focus({ preventScroll: true });
    else if (options.focusHeading) document.getElementById('page-title')?.focus({ preventScroll: true });
  }

  function showErrors(form, errors, general = 'Revisa els camps marcats per continuar.') {
    const box = form.querySelector('#form-error');
    box.textContent = general;
    box.hidden = false;
    for (const [id, message] of Object.entries(errors)) {
      const control = form.querySelector(`#${id}`);
      control.setAttribute('aria-invalid', 'true');
      const messageNode = form.querySelector(`#${id}-error`);
      messageNode.textContent = message; messageNode.hidden = false;
    }
    if (Object.keys(errors).length) form.querySelector(`#${Object.keys(errors)[0]}`).focus();
    else { box.tabIndex = -1; box.focus(); }
  }

  function saveError(form) {
    if (!errorSwitch.checked) return false;
    errorSwitch.checked = false;
    showErrors(form, {}, 'No s’ha pogut desar. Les dades del formulari es conserven. Torna-ho a provar.');
    return true;
  }

  function changeStatus(task, next) {
    if (!statuses[next]) return;
    if (!canChangeStatus(task)) {
      notify(task.status === 'done' ? 'La tasca és feta. No se’n pot canviar l’estat.' : 'Aquest recorregut reserva el canvi d’estat a la persona responsable.');
      return;
    }
    if (task.status === next) return;
    const focusId = document.activeElement?.id;
    task.status = next;
    state.mobileColumn = next;
    render({ focusId: next === 'done' && route.name === 'kanban' ? `task-link-${task.id}` : focusId || `task-link-${task.id}` });
    notify(`Estat actualitzat: ${statuses[next]}.`);
  }

  app.addEventListener('click', event => {
    const action = event.target.closest('[data-action]');
    if (!action) return;
    if (action.dataset.action === 'fill-auth') {
      if (document.getElementById('name')) document.getElementById('name').value = people[state.actor];
      document.getElementById('email').value = `membre.${state.actor}@example.test`;
      document.getElementById('password').value = 'MostraTrama';
      const form = action.closest('form');
      form.querySelectorAll('[aria-invalid]').forEach(control => control.removeAttribute('aria-invalid'));
      form.querySelectorAll('.error-text, #form-error').forEach(node => { node.hidden = true; });
      notify('Dades d’exemple preparades.');
    } else if (action.dataset.action === 'self-assign') {
      const task = state.tasks.find(t => t.id === action.dataset.taskId);
      if (!task || !projectForTask(task).members.includes(state.actor)) return;
      task.owner = state.actor;
      render({ focusHeading: true }); notify('Tens la tasca assignada.');
    } else if (action.dataset.action === 'column') {
      state.mobileColumn = action.dataset.column;
      const taskTabs = app.querySelectorAll('.kanban-tab');
      taskTabs.forEach(tab => {
        const current = tab.dataset.column === state.mobileColumn;
        tab.classList.toggle('is-active', current); tab.setAttribute('aria-pressed', String(current));
      });
      app.querySelectorAll('.board-column').forEach(column => column.classList.toggle('is-current', column.dataset.column === state.mobileColumn));
    } else if (action.dataset.action === 'logout') state.session = false;
  });

  app.addEventListener('change', event => {
    if (event.target.dataset.action === 'state') {
      const task = state.tasks.find(t => t.id === event.target.dataset.taskId);
      if (task) changeStatus(task, event.target.value);
    }
  });

  app.addEventListener('input', event => {
    const form = event.target.closest('form');
    if (!form) return;
    event.target.removeAttribute('aria-invalid');
    const error = document.getElementById(`${event.target.id}-error`);
    if (error) error.hidden = true;
    if (!form.querySelector('[aria-invalid="true"]')) form.querySelector('#form-error').hidden = true;
  });

  app.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.target;
    const values = new FormData(form);
    if (form.id === 'login-form' || form.id === 'register-form') {
      const errors = {};
      if (form.id === 'register-form' && !String(values.get('name')).trim()) errors.name = 'Escriu el nom visible.';
      const email = String(values.get('email')).trim();
      if (!email || form.querySelector('#email').validity.typeMismatch) errors.email = 'Escriu un correu electrònic vàlid.';
      if (!String(values.get('password'))) errors.password = 'Escriu una contrasenya d’exemple.';
      if (Object.keys(errors).length) { showErrors(form, errors); return; }
      state.session = true;
      // No es desa ni s’envia cap dada del formulari d’accés.
      navigate('projectes'); notify(form.id === 'register-form' ? 'Compte d’exemple creat. Ja pots revisar els projectes.' : 'Sessió d’exemple iniciada.');
    } else if (form.id === 'project-form') {
      const name = String(values.get('project-name')).trim();
      if (!name) { showErrors(form, { 'project-name': 'Escriu un nom per al projecte.' }); return; }
      if (saveError(form)) return;
      const project = { id: `p${state.nextId++}`, name, creator: state.actor, members: [state.actor] };
      state.projects.push(project); state.mobileColumn = 'todo';
      navigate(`kanban/${project.id}`); notify('Projecte creat. En tens el rol d’administrador.');
    } else if (form.id === 'task-form') {
      const title = String(values.get('task-title')).trim();
      if (!title) { showErrors(form, { 'task-title': 'Escriu un títol per a la tasca.' }); return; }
      if (saveError(form)) return;
      const project = state.projects.find(p => p.id === form.dataset.projectId);
      const task = state.tasks.find(t => t.id === form.dataset.taskId);
      const owner = isAdmin(project) ? (project.members.includes(values.get('task-owner')) ? values.get('task-owner') : null) : values.get('task-self') ? state.actor : task?.owner || null;
      const type = state.types.includes(values.get('task-type')) ? values.get('task-type') : 'Documentació';
      if (task) {
        const requestedStatus = values.get('task-state');
        if (canChangeStatus(task) && statuses[requestedStatus]) task.status = requestedStatus;
        Object.assign(task, { title, type, owner });
        state.mobileColumn = task.status;
        navigate(`tasca/${task.id}`); notify('La tasca s’ha desat.');
      } else {
        const newTask = { id: `t${state.nextId++}`, project: project.id, title, type, owner, status: 'todo' };
        state.tasks.push(newTask); state.mobileColumn = 'todo';
        navigate(`tasca/${newTask.id}`); notify('Tasca creada.');
      }
    }
  });

  app.addEventListener('dragstart', event => {
    const card = event.target.closest('.task-card');
    const task = card && state.tasks.find(t => t.id === card.dataset.taskId);
    if (!task || !canChangeStatus(task)) { event.preventDefault(); return; }
    dragId = task.id;
    event.dataTransfer.setData('text/plain', task.id);
    event.dataTransfer.effectAllowed = 'move';
    card.classList.add('is-dragging');
  });
  app.addEventListener('dragover', event => {
    const column = event.target.closest('.board-column');
    if (!column || !dragId) return;
    event.preventDefault(); event.dataTransfer.dropEffect = 'move';
    app.querySelectorAll('.drag-over').forEach(n => n.classList.remove('drag-over'));
    column.classList.add('drag-over');
  });
  app.addEventListener('drop', event => {
    const column = event.target.closest('.board-column');
    if (!column || !dragId) return;
    event.preventDefault();
    const task = state.tasks.find(t => t.id === dragId);
    if (task && task.project === route.project.id) changeStatus(task, column.dataset.column);
    dragId = null;
  });
  app.addEventListener('dragend', () => {
    dragId = null;
    app.querySelectorAll('.is-dragging,.drag-over').forEach(node => node.classList.remove('is-dragging', 'drag-over'));
  });

  scenario.addEventListener('change', () => {
    state.actor = scenario.value;
    render({ focusHeading: true }); notify(`Perfil de prova: ${people[state.actor]}.`);
  });
  document.getElementById('resetDemo').addEventListener('click', () => {
    reset(); navigate('acces'); notify('La mostra s’ha reiniciat.');
  });
  document.querySelector('.skip-link').addEventListener('click', event => {
    event.preventDefault();
    document.getElementById('contingut').focus();
  });
  window.addEventListener('hashchange', () => { render({ focusHeading: true }); window.scrollTo({ top: 0 }); });
  reset(); render();
})();
