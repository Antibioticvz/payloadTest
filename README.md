<h1 align="center">Test task for Payload CMS and NextJS tech stack</h1>

Simple blog web application developed with [Next.js](https://nextjs.org/) and [PayloadCMS](https://payloadcms.com/). The application allow users to view a list of articles, view details of each article, and
leave comments.

<h1>Installation and usage guide</h1>
Make sure you have installed PostgresSQL on your machine before you run the app.
Create db `postgres` and user `postgres` with password `postgres`.

<br>

<b>Run and Stop Postgres on your machine for local development (MacOS):</b>

`brew services start postgresql@16`

`brew services stop postgresql@16`

<h2>Run Payload CRM on your machine for local development:</h2>

Create a `.env` file and fill it with your database credentials like in `.env.example`

`cd payload && cp .env.example .env`

<b> Next steps populate the database with seeds data</b>

<h2>To populate the database with seeds data</h2>

Change the `.env` file to `PAYLOAD_SEED=true`

<h3>Generate types for Payload for development (Can skip)</h3>

`cd payload && yarn generate:types`

Go to the app folder `cd payload`

<b>Start the server</b> `yarn && yarn dev`

Now Open [http://localhost:3000/admin](http://localhost:3000/admin) to access the admin panel.

Create your first admin user using the form on the page

<h2>Run NextJS on your machine for local development:</h2>

Go to the app folder `cd ssr-app`

<b>Start the SSR App</b> `yarn && yarn dev`

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

<h2>Playwright tests</h2>

Start the playload server than start the ssr app.

<b>Run the tests in the ssr-app folder</b> `yarn test`

<h2>Development roadmap</h2>
<h3>CMS</h3>
 <p>[x] Postgres db installation</p>
 <p>[x] Payload CMS initial config</p>
 <p>[x] Create Posts and Comments endpoints</p>
 <p>[x] Configure relationships for models</p>
 <p>[x] Configure access control for not authenticated users</p>
 <p>[x] Posts Seeds</p>

<h3 align="left">App</h3>
 <p>[x] Initial config for NextJS</p>
 <p>[x] Prettier config</p>
 <p>[x] Configure Routes</p>
 <p>[x] Components and Pages</p>
 <p>[x] Connect to PayloadCMS</p>
 <p>[x] Comment Functionality</p>
 <p>[x] Load more posts</p>
 <p>[x] Add SEO</p>
 <p>[x] Add Playwright tests</p>
</br>

developed by [Victor Zadorozhnyy](https://github.com/Antibioticvz)
