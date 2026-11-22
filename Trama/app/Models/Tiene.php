<?php

namespace App\Models;

use App\Models\Proyecto;
use App\Models\Roles;
use App\Models\Usuario;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Tiene extends Model
{
    //
    protected $table = 'tiene';
    public $timestamps = false;

    public function usuarios(): BelongsToMany
    {
        return $this->belongsToMany(Usuario::class, 'id_usuario');
    }

    public function roles(): BelongsTo
    {
        return $this->belongsTo(Roles::class, 'id_rol');
    }

    public function proyectos(): BelongsToMany
    {
        return $this->belongsToMany(Proyecto::class, 'id_proyecto');
    }
}
