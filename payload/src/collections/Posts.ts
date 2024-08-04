import { CollectionConfig } from 'payload/types'

import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'

const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    // Disable auth for now
    read: () => true,
    update: () => true,
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
    {
      name: 'comments',
      label: 'Comments',
      type: 'relationship',
      relationTo: 'comments',
      hasMany: true,
    },
  ],
}

export default Posts
