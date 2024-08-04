import { CollectionConfig } from "payload/types"

const Comments: CollectionConfig = {
  slug: "comments",
  access: {
    // Disable auth for now
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "text",
      required: true,
      type: "textarea",
    },
  ],
}

export default Comments
