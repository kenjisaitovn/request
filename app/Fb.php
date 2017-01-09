<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Fb extends Authenticatable
{
    public $table = 'fb';
}
