<?php

namespace App\Models;

use App\Models\Tarea;
use App\Models\Tiene;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Usuario extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'usuarios';
    public $timestamps = false;

    public function tareaCreador() : HasMany
    {
        return $this->hasMany(Tarea::class, 'id_usuario_creador');
    }

    public function tareaAsignado() : HasMany
    {
        return $this->hasMany(Tarea::class, 'id_usuario_asignado');
    }

    public function tiene(): BelongsToMany
    {
        return $this->belongsToMany(Tiene::class, 'id_usuario');
    }
}

