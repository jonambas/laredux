<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;

use Tymon\JWTAuth\Facades\JWTAuth;
use App\User;

class ApiController extends Controller
{
    public function user(Request $request) {
      dd($request);
      return JWTAuth::parseToken()->authenticate();
    }
}
