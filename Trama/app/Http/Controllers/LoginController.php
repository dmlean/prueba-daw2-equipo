<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function showLoginForm()
    {
        return view('auth.login');
    }

    public function login(Request $request)
    {
        $usuario = Usuario::where('email', $request->input('email'))->first();

        if ($usuario && Hash::check($request->input('password'), $usuario->contrasenya)){
            Auth::login($usuario);
            $response = redirect('/');
        } else {
            session()->flash('error', 'Las credenciales son incorrectas');
            $response = redirect()->back()->withInput();
        }

        return $response;
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return redirect('/');
    }


}

