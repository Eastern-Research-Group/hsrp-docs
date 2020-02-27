# File Structure

Vue code is in the `client` directory.

- `src/main.js` - Adds necessary Vue plugins and instantiates the Vue instance.
- `src/App.vue` - Base Vue component container for all sub-components (including view files).
- `src/router` - Defines front-end page URLs which point to different view files.
- `src/views` - Base files for each page within the app. The router points to these files depending on the URL, and these files usually contain several child components to build the UI.
- `src/components` - Vue component files which make up the UI.
- `src/store` - Vuex files for state management. Vuex is used to handle the sharing of data between re-usable components. Vuex actions handle communications between the front-end and Laravel API.
- `src/mixins` - Vue mixins are used to share component logic between separate components that each contains pieces of the same functionality. They help to further reduce code duplication.
- `src/assets` - SCSS stylesheets.
- `src/utils` - Shared utility/helper functions.
- `src/api.js` - Shared API related functions for setting up axios and calling axios GET, POST, etc. requests.
- `public` - Contains the base HTML file along with any static files that need to be served (e.g. favicon). `public/index.html` contains the base OneEPA template as a wrapper for the Vue app.
- `dist` - Vue build files are stored here. This folder is not committed to version control - it is automatically created via the Vue build scripts defined in `package.json`. The Laravel server is set to serve this folder in production so that all application code runs under a single server instance.