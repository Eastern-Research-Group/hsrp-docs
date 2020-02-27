# Set Up Dev Environment

1. Clone the app directory inside laragon/www (or your local server's file directory), e.g. `git clone https://github.com/Eastern-Research-Group/radar.git`
2. Run `composer install` in the server directory
3. Run `npm install` in the client directory
4. Connect to your local MySQL server (Laragon comes with HeidiSQL for a MySQL GUI, also recommend DBeaver)
5. Create a new database titled by the app name (e.g. "radar", "i-waste")
6. Copy contents of `server/.env.example` to `server/.env`
7. Run `php artisan key:generate` to generate secret key, which is automatically added to `APP_KEY` in the .env file
8. Set `DB_DATABASE` to local database name (e.g. "radar", "i-waste")
9. *Currently only applicable to RADAR:* Set `JWT_SECRET` to a random 64-bit alpahnumeric string (you can find one here: https://www.grc.com/passwords.htm)
10. Run `php artisan migrate` to build the database schema
11. Run `php artisan db:seed` to seed the database with existing data
12. Copy contents of `client/.env.example` to `client/.env` (adjust API URL if needed - Laragon automatically creates local URLs for your PHP apps, so the Laravel app should be running at http://[app directory name].test)
13. Run `npm start` to start the front-end development server

Note: The first time the front-end calls the Laravel API, a browser-based auth prompt will display. This is set up while the app is in development on Cloud.gov. From the .env.exmaple file, both the username and password are "testing", without quotes. After entering once you should not be prompted again.