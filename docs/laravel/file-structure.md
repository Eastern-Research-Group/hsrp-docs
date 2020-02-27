# File Structure

Laravel code is in the `server` directory.

* `routes/api.php` - Set up URL routes for API endpoints, which point to controller methods
* `app/Http/Controllers` - Controllers are PHP classes containing methods that accept the request from the defined routes, perform some function (usually querying the database), and return a response (usually data in JSON format)
* `database/` - Contains sub-directories for database management:
	* `data` - CSV files of raw data to load into the database
	* `migrations` - Migration files define the database schema (tables and relationships). Laravel runs these migrations to build the database
	* `seeds` - Seed files populate the database with data, coming from the CSV files within the `data` directory
* `app/*.php` - e.g. User.php. These are model files which map to specific database tables. They are singular and PascalCase, mapping to the plural snake_case database table name (e.g. FacilityType.php would map to the facility_types database table, unless the table name is specified as different in the model file). Model files contain relationships to other tables and are used to query the database.
* `config` - Various configuration files for Laravel functionality
* `.env` - Environment variables to set database connection, app debugging, and more