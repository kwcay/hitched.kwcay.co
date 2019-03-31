# #hitched

- [Getting started](#getting-started)
- [Running the app](#running-the-app)
- [Translation files](#translation-files)

# Getting started

Make sure [Yarn](https://yarnpkg.com) is installed on your machine:

```shell
yarn --version
```

Then clone the repository and install the dependencies:

```shell
git clone git@github.com:kwcay/hitched.kwcay.co.git
cd hitched.kwcay.co
yarn install
```

Finally, create a local environment file:

```shell
cp .env.sample .env
```

Make sure the API is set to `http://localhost:8080`, or wherever the your local version of the [Hitched API](https://github.com/kwcay/hitched-api) is running.

# Running the app

```shell
# Run the app locally.
yarn start

# Deploy to Github Pages (don't forget to create the .env.production file).
yarn deploy
```

# Translation files

The translation files are in [`src/translations`](https://github.com/kwcay/hitched.kwcay.co/tree/stable/src/translations). You can modify them directly from the Github UI.
