<?php

namespace App\Models;

use App\Models\Tarea;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Tipo extends Model
{
    protected $table = 'tipos';
    public $timestamps = false;

    public function tarea() : HasMany
    {
        return $this->hasMany(Tarea::class, 'id_tipo');
    }
}
