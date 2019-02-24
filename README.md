# #hitched

# Quickstart

```shell
# Run locally
yarn start

# Deploy to Github Pages
yarn deploy
```

# Initial setup

Create the local and production environment files:

```shell
cp ./.env.sample ./.env
cp ./.env.sample ./.env.production
```

Make sure the local API points to `http://localhost:8080` and the production one points to the right place.

# Updating the translations

The translation files are located in `./src/translations`. You can use the Github UI to modify them directly.
