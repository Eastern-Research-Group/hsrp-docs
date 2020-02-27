# Adding a New API Endpoint

The general process for adding new data to the database and creating a new API endpoint is:

* `php artisan make:model Item -m` - creates `app/Item.php` and `database/migrations/[...]create_items_table.php`
* In the model file (`Item.php`), change `extends Model` to `extends BaseModel`. The BaseModel file contains functionality to automatically convert database snake_case fields to camelCase for JSON output.
* In the migration file, define the table schema (fields and data types).
* `php artisan migrate:refresh` - This will rebuild the database with the new `items` table. Confirm schema is as expected in database.
* Add a CSV file to `database/data`, e.g. `items.csv`. Make sure the CSV has a header row with field names that match the database field names (this makes it easier to seed using the `seedFromCsv` utility function).
* Call the `seedFromCsv` function in an existing or new seeder file in `database/seeds`, pointing to the new data file.
* Run `php artisan db:seed` to populate the database. Confirm the new data has been populated in the new table.
* Run `php artisan make:controller ItemController` to create a new controller, or copy from an existing controller file. Add `use App\Item` at the top, then add an `index()` method within the controller, and `return (new Item)->get()` within the index method. This will return all rows from the items table.
* Add a new route definition in `routes/api.php`:
	* `Route::resource('items', 'ItemController');` - this will automatically map a GET request at `api/items` to the index method of the ItemController. `Route::resource` automatically maps specific endpoint URLs to specifically-named controller methods. See [here](https://laravel.com/docs/5.8/controllers#resource-controllers) for the full list of mappings.
	* `Route::get('items', 'ItemController@index');` - this will map a GET request at `api/items` to the ItemController index method. You can use this syntax to set each item endpoint one-by-one if preffered (e.g. `Route::post('items/new-item, 'ItemController@newItem');`
* Test and confirm that the endpoint returns the correct JSON data by navigating to the URL in your browser. You can also use Postman or IDE extensions to test non-GET requests.