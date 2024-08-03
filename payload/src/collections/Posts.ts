import { CollectionConfig } from "payload/types"

const Posts: CollectionConfig = {
  slug: "posts",
  access: {
    // Disable auth for now
    read: () => true,
  },
  fields: [
    {
      name: "title",
      required: true,
      type: "text",
    },
    {
      name: "text",
      required: true,
      type: "text",
    },
    {
      name: "image",
      type: "text",
    },
  ],
}

export default Posts
