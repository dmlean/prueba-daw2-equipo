<?php

namespace App\Models;

use App\Models\Estado;
use App\Models\Proyecto;
use App\Models\Tipo;
use App\Models\Usuario;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Tarea extends Model
{
    //
    protected $table = 'tarea';
    public $timestamps = false;

    public function proyecto() : BelongsTo
    {
        return $this->belongsTo(Proyecto::class, 'id_proyecto');
    }

    public function usuarioCreado() : BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'id_usuario_creado');
    }

    public function usuarioAsignado() : BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'id_usuario_asignado');
    }

    public function tipo() : BelongsTo
    {
        return $this->belongsTo(Tipo::class, 'id_tipo');
    }

    public function estado() : BelongsTo
    {
        return $this->belongsTo(Estado::class, 'id_estado');
    }
}
