<?php

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
  'prefix'     => 'api/v1',
  'middleware' => ['api', 'cors'],
  ], function () {

    Route::get('/test',   'ApiAuthController@test');
    Route::post('/login',   'ApiAuthController@login');
    Route::post('/register', 'ApiAuthController@register');

});

Route::group([
  'prefix'     => 'api/v1',
  'middleware' => ['api', 'jwt.auth', 'cors']
  ], function () {

    Route::get('/user', function() {
      return JWTAuth::parseToken()->authenticate();
    });

});