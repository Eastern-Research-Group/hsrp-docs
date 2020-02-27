# Command Line

Laravel comes with a command line interface called [Artisan](https://laravel.com/docs/5.8/artisan). View the docs or run `php artisan list` to view available commands. Note that Artisan commands must be run in the `server` directory. These are the main commands used:

* `php artisan make:model [Model Name] -m` - Creates a new database Model and a migration for the database table (the `-m` argument is used to create a corresponding migration file).
* `php artisan migrate:refresh` - Refreshes and runs all migration files to re-build the database schema. This should be run after a new migration file is added.
* `php artisan db:seed` - Seeds to the database with data as defined in the `database/seeders` files. This should be run after adding new data and seeder methods.