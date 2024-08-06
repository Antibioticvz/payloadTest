import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
import seoPlugin from '@payloadcms/plugin-seo'

import Users from './collections/Users'
import Posts from './collections/Posts'
import Comments from './collections/Comments'
import { seed } from './seed'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Posts, Comments],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud(),
    seoPlugin({
      collections: ['posts'],
      generateTitle: ({ doc }) =>
        `Website.com — ${(doc as { title: { value: string } })?.title?.value}`,
      generateDescription: ({ doc }) => (doc as { excerpt: { value: string } })?.excerpt?.value,
    }),
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  onInit: async payload => {
    // If the `env` var `PAYLOAD_SEED` is set, seed the db
    if (process.env.PAYLOAD_SEED === 'true') {
      await seed(payload)
    }
  },
})
