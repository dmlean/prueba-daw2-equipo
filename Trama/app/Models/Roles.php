<?php

namespace App\Models;

use App\Models\Tiene;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Roles extends Model
{
    //
    protected $table = 'roles';
    public $timestamps = false;

    public function tiene(): HasMany
    {
        return $this->hasMany(Tiene::class, 'id_rol');
    }
}
