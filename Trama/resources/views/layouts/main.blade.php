<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title', 'Trama')</title>
    <link rel="stylesheet" href="{{ asset('css/estilos.css') }}">
    <link href="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.css" rel="stylesheet" />
</head>

<body>

    <header>
        <div class="logo">
            <img src="{{ asset('imagenes/logo-principal.svg') }}"
                 alt="Trama" width="164" height="47">
        </div>

        <a href="{{ route('perfil') }}" class="inic"> {{ Auth::user()->nombre }} </a> <!-- Colocar el nombre del usuario en vez de iniciar sesion -->
            
    </header>

    <hr>

    @section('content')

        @yield('content')

    <script src="{{ asset('js/index.js') }}"></script>

</body>
</html>