# Scripts

## npm

Scripts are defined in `package.json`

* `npm start` - Starts the front-end development server. Defaults to http://localhost:8080. If 8080 is taken, it will use the next available port.
* `npm run build` - Builds the app into bundled files and saves into the `dist` directory.
* `npm run lint` - Checks front-end code using eslint and prettier for formatting and code quality issues. `npm run lint:fix` will run the linter and fix any issues that can be fixed automatically.
* `npm test` - Runs all unit tests.

## husky

Husky is used to automatically lint code before a commit is executed. This pre-commit script is also defined in `package.json`. If the lint script fails, the commit will not go through and an error will be produced. Run `npm run lint:fix` and manually fix any remaining issues, then re-commit.