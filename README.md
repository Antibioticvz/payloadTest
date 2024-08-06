<h1 align="center">Test task for Payload CMS and NextJS tech stack</h1>

Simple blog web application developed with [Next.js](https://nextjs.org/) and [PayloadCMS](https://payloadcms.com/). The application allow users to view a list of articles, view details of each article, and
leave comments.

<h2 align="left">Installation and usage guide</h2>
Make sure you have installed PostgresSQL on your machine before you run the app.

<br>

<b>Run and Stop Postgres on your machine for local development (MacOS):</b>

`brew services start postgresql@16`

`brew services stop postgresql@16`

<h3>Run Payload CRM on your machine for local development:</h3>

Create a `.env` file and fill it with your database credentials like in `.env.example`

`cd payload && cp .env.example .env`

<b> Next steps populate the database with seeds data</b>

<h3>To populate the database with seeds data</h3>

Change the `.env` file to `PAYLOAD_SEED=true`

<h3>Generate types for Payload for development</h3>
`cd payload && yarn generate:types`

<b>Finally</b> `yarn && yarn dev`

Now Open [http://localhost:3000/admin](http://localhost:3000/admin) to access the admin panel.

Create your first admin user using the form on the page

<h3>Run NextJS on your machine for local development:</h3>

Go to the app folder `cd ssr-app`

`yarn && yarn dev`

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

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
 <p>[] Load more posts</p>
 <p>[ ] Add SEO</p>
 <p>[ ] Add Jest tests</p>
</br>

developed by [Victor Zadorozhnyy](https://github.com/Antibioticvz)
