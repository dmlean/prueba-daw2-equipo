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

        @yield('content')

    <script src="{{ asset('js/index.js') }}"></script>

</body>
</html>