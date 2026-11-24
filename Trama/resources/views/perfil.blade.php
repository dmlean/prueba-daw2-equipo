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
            {{-- <div>
                <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Your password</label>
                <input type="password" id="password"
                    class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                    placeholder="•••••••••" required />
            </div> --}}
            <form action="{{ route('logout') }}">
                <div class="mb-4">
                    <button type="submit">Cerrar sesión</button>
                </div>
            </form>

        </div>
    </div>
@endsection
