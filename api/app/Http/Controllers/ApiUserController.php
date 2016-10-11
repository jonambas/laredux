<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;

use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use App\User;

class ApiUserController extends Controller
{
    
    public function getAuthenticatedUser(Request $request) {
      
      $user = JWTAuth::parseToken()->toUser();      
      return response()->json(compact('user'), 200);

    }
    

}
