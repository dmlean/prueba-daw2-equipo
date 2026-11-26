@extends('layouts.main')

@section('title', 'Tus proyectos')

@section('content')

    <main>

        <p class="titulo">ESPACIO DE TRABAJO</p>

        <p class="proyectos">Tus Proyectos</p>

        <p>Elige un proyecto y sigue con tu trabajo.</p>

        <button id="crearProyecto" onclick="crearProyecto()">
            + Crear un Proyecto
        </button>

        <div class="clases" id="listaProyectos">
        </div>

    </main>

@endsection