<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>@yield('title')</title>
    
    <link href="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.css" rel="stylesheet" />
    <link rel="icon" type="image/png" href="/resources/imagenes/icon.png">

    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f4f5ef;
            height: 100vh
        }

        #panelLogin {
            border-radius: 12px;
            background-color: white;
        }

        input {
            border-radius: 8px;
        }

        #botonLogin {
            margin-top: 2rem;
            background-color: #176b5b;
            border-radius: 8px
        }
    </style>
</head>
<body>

    <div id="panelLogin" class="w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">
        <form action="#">
            <h1 class="text-xl font-semibold text-heading mb-6">Inicia sesión</h1>
            <div class="mb-4">
                <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Correo Electrónico</label>
                <input type="email" id="email" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="example@company.com" required />
            </div>
            <div>
                <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Contraseña</label>
                <input type="password" id="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" required />
            </div>
            <button id="botonLogin" type="submit" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3">Iniciar Sesión</button>
            <div class="text-sm font-medium text-body">No tienes cuenta? <a href="#" class="text-fg-brand hover:underline">Crear cuenta</a></div>
        </form>
    </div>

</body>
</html>