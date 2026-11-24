<?php

namespace App\Http\Controllers;

use App\Models\Proyecto;
use Illuminate\Http\Request;

class ProyectoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        // $proyectos = Proyecto::all();

        $query = Proyecto::query();

        if($request->has('search')){
            $query->where('nombre', 'like', '%' . $request->input('search') . '%');
        }

        $proyectos = $query->orderBy('nombre', 'asc')->get();

        return view('layouts.main', compact('proyectos', 'request'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $proyecto = new Proyecto();
        $proyecto->nombre = $request->input('nombre');

        $proyecto->save();
        return redirect()->route('proyecto.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Proyecto $proyecto)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Proyecto $proyecto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Proyecto $proyecto)
    {
        //
        $proyecto->nombre = $request->input('edit-nombre');
        $proyecto->save();

        return redirect()->route('proyecto.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Proyecto $proyecto)
    {
        //
    }
}
