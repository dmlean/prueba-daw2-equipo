<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title', 'Trama')</title>
    <link rel="stylesheet" href="{{ asset('css/estilos.css') }}">
</head>

<body>

    <header>
        <div class="logo">
            <img src="{{ asset('imagenes/logo-principal.svg') }}"
                 alt="Trama" width="164" height="47">
        </div>

        @auth
            <span class="inic">Hola, {{ Auth::user()->nom }}</span>
        @else
            <a href="{{ route('login') }}" class="inic">Iniciar sesión</a>
        @endauth
    </header>

    <hr>

    @section('content')

        <main>

            <p class="titulo">ESPACIO DE TRABAJO</p>

            <p class="proyectos">Tus Proyectos</p>

            <p>Elige un proyecto y sigue con tu trabajo.</p>

            <button id="crearProyecto" onclick="crearProyecto()">
                + Crear un Proyecto
            </button>

            <div class="clases" id="listaProyectos">

                <div class="tarjeta">
                    <h3>Portal del Taller</h3>
                    <p>Diseño y contenidos del portal compartido.</p>
                    <hr>
                    <div class="acciones">
                        <button class="abrir">Abrir proyecto</button>
                        <p class="borrar">Eliminar Proyecto</p>
                    </div>
                </div>

                <div class="tarjeta">
                    <h3>Guía del Barrio</h3>
                    <p>Un punto de encuentro para ordenar los contenidos del barrio.</p>
                    <hr>
                    <div class="acciones">
                        <button class="abrir">Abrir proyecto</button>
                        <p class="borrar">Eliminar proyecto</p>
                    </div>
                </div>

            </div>

        </main>

    @show

    <script src="{{ asset('js/index.js') }}"></script>

</body>
</html>