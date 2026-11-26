@extends('layouts.main')

@section('content')
    <div class="perfil">
        <div class="panelPerfil w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">
            <h5 class="text-xl font-semibold text-heading mb-6">Perfil</h5>
            <div class="mb-4">
                <h2>Nombre: {{ Auth::user()->nombre }}</h2>
            </div>
            <div class="mb-4">
                <h2>Apellido: {{ Auth::user()->apellido }}</h2>
            </div>
            <div class="mb-4">
                <h2>Email: {{ Auth::user()->email }}</h2>
            </div>
            <div class="mb-4">
                <a href="{{ route('/') }}"><button>Volver</button></a>
                <a href="{{ route('logout') }}"><button>Cerrar sesión</button></a>
            </div>

        </div>
    </div>
@endsection
