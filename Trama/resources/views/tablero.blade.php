@extends('layouts.main')

@section('title', 'Tablero del proyecto')

@section('content')

    <section id="pantallaProyecto">

        <a href="{{ url('/') }}">← Volver a proyectos</a>

        <p class="titulo">TABLA DE TAREAS</p>

        <h1 id="nombreProyecto"></h1>

        <button id="crearTarea" onclick="crearTarea()">
            + Crear Tarea
        </button>

        <div class="tablero">

            <div class="columna">
                <h3>Por Hacer</h3>
                <div id="porHacer"></div>
            </div>

            <div class="columna">
                <h3>En progreso</h3>
                <div id="enProgreso"></div>
            </div>

            <div class="columna">
                <h3>Hecho</h3>
                <div id="hecho"></div>
            </div>

        </div>

    </section>

@endsection