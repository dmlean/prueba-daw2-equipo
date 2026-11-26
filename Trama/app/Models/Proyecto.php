<?php

namespace App\Models;

use App\Models\Tarea;
use App\Models\Tiene;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Proyecto extends Model
{
    
    protected $table = 'proyectos';
    public $timestamps = false;

    public function tarea() : HasMany
    {
        return $this->hasMany(Tarea::class, 'id_proyecto');
    }

    public function tiene() : BelongsToMany
    {
        return $this->belongsToMany(Tiene::class, 'id_proyecto');
    }
}
