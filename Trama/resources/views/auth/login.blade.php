<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>@yield('title')</title>
    
    <link href="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.css" rel="stylesheet" />
    <link rel="icon" type="image/png" href="{{ asset('imagenes/trama_icon.svg') }}">

    <link rel="stylesheet" href="{{ asset('css/styles.css') }}"></link>
</head>
<body>

    <div class="panelLogin w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">
        <form action="{{ route('login.submit') }}" method="post">
            @csrf
            <h1 class="text-xl font-semibold text-heading mb-6">Inicia sesión</h1>
            @include('auth.errors')

            <div class="mb-4">
                <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Correo Electrónico</label>
                <input id="email" type="email" name="email" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="example@company.com" value="{{ old('email') }}" required />
            </div>
            <div>
                <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Contraseña</label>
                <input id="password" type="password" name="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" value="{{ old('password') }}" required />
            </div>
            <button id="botonLogin" type="submit" class="botonLogin text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3">Iniciar Sesión</button>
            <div class="text-sm font-medium text-body">No tienes cuenta? <a href="#" class="cambiarPanel text-fg-brand hover:underline">Crear cuenta</a></div>
        </form>
    </div>

    <div class="panelLogin w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs hidden">
        <form action="{{ route('usuario.store') }}" method="POST">
            @csrf

            <h1 class="text-xl font-semibold text-heading mb-6">Crear cuenta</h1>
            <div class="mb-4">
                <label for="nombre" class="block mb-2.5 text-sm font-medium text-heading">Nombre</label>
                <input id="nombre" type="text" name="nombre" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="pepe" required>
            </div>
            <div class="mb-4">
                <label for="apellido" class="block mb-2.5 text-sm font-medium text-heading">Apellido</label>
                <input id="apellido" type="text" name="apellido" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="gonzalez" required>
            </div>
            <div class="mb-4">
                <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Correo Electrónico</label>
                <input id="email" type="email" name="email" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="example@company.com" required />
            </div>
            <div>
                <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Contraseña</label>
                <input id="password" type="password" name="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" required />
            </div>
            <button type="submit" class="botonLogin text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3">Iniciar Sesión</button>
            <div class="text-sm font-medium text-body">Ya tienes cuenta? <a href="#" class="cambiarPanel text-fg-brand hover:underline">Iniciar sesión</a></div>
        </form>
    </div>
</body>
<script src="{{ asset('js/app.js') }}"></script>
</html>