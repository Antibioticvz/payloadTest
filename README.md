
<h1 align="center">Test Task for Payload CMS and NextJS Tech Stack</h1>

This is a simple blog web application developed with [Next.js](https://nextjs.org/) and [Payload CMS](https://payloadcms.com/). The application allows users to view a list of articles, view details of each article, and leave comments.

## Installation and Usage Guide

Ensure you have PostgreSQL installed on your machine before running the app. Create a database named `postgres` and a user `postgres` with the password `postgres`.

### Running and Stopping PostgreSQL (MacOS)

To start PostgreSQL:
```sh
brew services start postgresql@16
```

To stop PostgreSQL:
```sh
brew services stop postgresql@16
```

### Running Payload CMS for Local Development

1. Create a `.env` file and fill it with your database credentials as shown in `.env.example`:
    ```sh
    cd payload && cp .env.example .env
    ```

2. Install Payload with the following command:
    ```sh
    yarn
    ```

3. To populate the database with seed data, set the `PAYLOAD_SEED` variable in the `.env` file to `true`:
    ```sh
    PAYLOAD_SEED=true
    ```

4. (Optional) Generate types for Payload for development:
    ```sh
    yarn generate:types
    ```

5. Start the Payload server:
    ```sh
    yarn dev
    ```

6. Open [http://localhost:3000/admin](http://localhost:3000/admin) to access the admin panel and create your first admin user using the form on the page.

### Running NextJS for Local Development

1. Navigate to the app folder:
    ```sh
    cd ssr-app
    ```

2. Start the SSR App:
    ```sh
    yarn && yarn dev
    ```

3. Open [http://localhost:3001](http://localhost:3001) in your browser to see the result.

### Running Playwright Tests

1. Ensure the Payload server is running and then start the SSR app.

2. Run the tests in the `ssr-app` folder:
    ```sh
    yarn test
    ```

## Development Roadmap

### CMS
- [x] PostgreSQL DB installation
- [x] Payload CMS initial config
- [x] Create Posts and Comments endpoints
- [x] Configure relationships for models
- [x] Configure access control for non-authenticated users
- [x] Posts seeds

### App
- [x] Initial config for NextJS
- [x] Prettier config
- [x] Configure routes
- [x] Components and pages
- [x] Connect to Payload CMS
- [x] Comment functionality
- [x] Load more posts
- [x] Add SEO
- [x] Add Playwright tests

---

Developed by [Victor Zadorozhnyy](https://github.com/Antibioticvz)
