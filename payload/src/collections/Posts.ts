import { CollectionConfig } from 'payload/types'

import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'

const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    // Disable auth for now
    read: () => true,
    update: () => true,
  },
  hooks: {
    afterRead: [
      async ({ req, doc }) => {
        const comments = await req.payload.find({
          collection: 'comments',
          req,
          depth: 0,
          pagination: false,
          where: { post: { equals: doc.id } },
        })

        return { ...doc, comments: comments.docs }
      },
    ],
  },
  fields: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      name: 'text',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    lexicalHTML('text', { name: 'text_html_' }),
    {
      name: 'image',
      type: 'text',
    },
  ],
}

export default Posts
