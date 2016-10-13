# laredux

Boilerplate with a Laravel API backend, React & Redux frontend, and a basic auth setup.

#### Running Laravel
Refer to [this guide](https://laravel.com/docs/master/installation) for help. A better option than `php artisan serve` would be to run a [Homestead Vagrant box](https://laravel.com/docs/master/homestead). 

```bash
$ cd api
$ composer install
$ php artisan migrate
$ php artisan serve
```

#### Running the Frontend
```bash
$ cd client
$ npm install
$ npm start
```

Client will attempt to make requests to `http://laredux.dev`, but you can change this url in `./client/src/api/apiConfig.js`
