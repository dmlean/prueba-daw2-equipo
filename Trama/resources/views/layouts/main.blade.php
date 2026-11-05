<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
</head>
<body>
    <header>
        <div class="logo">
            <img src="{{ asset('imagenes/logo-principal.svg') }}" alt="Foto" alt="Trama" width="164" height="47">
        </div>

        <div class="inic"> Iniciar Sesión </div>
            
    </header>
    <hr>
    <body>
        <main>
            <p class="titulo"> ESPACIO DE TRABAJO </p>

            <p class="proyectos"> Tus Proyectos </p>

            <p> Elige un proyecto y sigue con tu trabajo. </p>

            <button onclick=crearProyecto()>
                + Crear un Proyecto
            </button>

            <div class="clases">
                <div class="tarjeta">
                    <h3> Portal del Taller </h3>
                    <p> Diseño y contenidos del portal compartido. </p>
                    <hr>
                    <p> 👥2 Colaboradores </p>
                    <p class="abrir"> Abrir proyecto </p>
                </div>
                <div class="tarjeta">
                    <h3> Guía del Barrio </h3>
                    <p> Un punto de encuentro para ordenar los contenidos del barrio. </p>
                    <hr>
                    <p> 👥2 Colaboradores </p>
                    <p class="abrir"> Abrir proyecto </p>
                </div>

            </div>
        </main>
    </body>
    <script>
        function crearProyecto() {

        let nombre = prompt("Crear nuevo proyecto: ");  

        if (nombre) {
            alert ("Proyecto creado: " + nombre)
        }
    }
        
    </script>
</html>
    <div>
        @yield('content') <!-- Todo el contenido que vamos a ir haciendo como la gestión de proyectos y tareas-->
    </div>
</body>
</html>