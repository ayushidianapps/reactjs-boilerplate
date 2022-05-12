#### Install the project directly by cloning.

#### Run `npm i` or `npm install`.

#### You will find 4 env files:

- .env for global environment files
- .env.development for development environment
- .env.staging for staging environment
- .env.production for production environment

#### Command to run on a certain environment:

- `npm run start` for development
- `npm run start:staging` for staging
- `npm run start:production` for production

#### Note: We are not adding package-lock.json to the `gitignore` because we can run `npm ci` command to keep the `package.json` and `package-lock.json` files in sync.

- For more details read the accepted answer on this link: https://stackoverflow.com/questions/48524417/should-the-package-lock-json-file-be-added-to-gitignore
