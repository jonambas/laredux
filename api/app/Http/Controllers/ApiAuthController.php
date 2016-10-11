<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;

use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use App\User;

class ApiAuthController extends Controller
{
    
    public function login(Request $request) {

      $credentials = $request->only('email', 'password');

      try {

        $token = JWTAuth::attempt($credentials);
        
        if (!$token) {
          return response()->json(['error' => 'invalid_credentials'], 401);
        }

      } catch (JWTException $e) {

        return response()->json(['error' => 'could_not_create_token'], 500);

      }      

      return response()->json(compact('token'), 200);
    }

    public function register(Request $request) {
      // return response()->json('register json', 200);
      // return JWTAuth::parseToken()->authenticate();
    }
}
