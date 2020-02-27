# Introduction

HSRP apps use Laravel, Vue-CLI, and the OneEPA template alongside the US Web Design System (USWDS). 

* Laravel is used for an API against a MySQL database
* Vue-CLI is used for a front-end SPA which includes routing via Vue Router and state management via Vuex
* The development environment makes use of two local servers - one to host the  Laravel API via Laragon (or another local PHP-based server), and one to host the Vue front-end via NodeJS
* The development environment enables CORS so the Vue server can successfully call the Laravel API
* The production build enables Laravel to host both the API and front-end, so only one PHP-based server is required for hosting 
