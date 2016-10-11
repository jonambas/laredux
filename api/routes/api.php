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

    Route::post('/login',    'ApiAuthController@login');
    Route::post('/register', 'ApiAuthController@register');

});

Route::group([
  'prefix'     => 'api/v1',
  'middleware' => ['api', 'cors', 'jwt.auth', ]
  ], function () {

    Route::get('/user', 'ApiUserController@getAuthenticatedUser');
    

});