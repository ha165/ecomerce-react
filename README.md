# Ecomerce 
1. Built with Laravel 11 and react with vite
## Laravel Backend:API Backend Installation

1. Navigate in your Laravel API project folder: `cd your-backend-api`
2. Install project dependencies: `composer install`
3. Create a new .env file: `cp .env.example .env`
4. Generate a new application key: `php artisan key:generate`
5. Add your own database credentials in the .env file in DB_DATABASE, DB_USERNAME, DB_PASSWORD
6. create a symbolic link: `php artisan storage:link`
7. Create users table: `php artisan migrate --seed`
8. Generate application key: `php artisan key:generate`
9. Install Laravel Passport: `php artisan passport:install` 
8. Add your own mailtrap.io credentials in MAIL_USERNAME and MAIL_PASSWORD in the .env file

## React Frontend Installation

1. Set up your api for the project
2. Download and Install NodeJs LTS version from [NodeJs Official Page](https://nodejs.org/en/download/).
3. cd to your react app `cd react-app` of the product and run `yarn install` or `npm install` to install our local dependencies.