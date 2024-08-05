'use client' // This is a client component 👈🏽

import { FC, useState } from 'react'

import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

interface IPost {
  params: {
    id: string
  }
}
const Post: FC<IPost> = ({ params }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  console.log(params.id)

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-muted w-full h-64 flex items-center justify-center">
        <img
          src="https://picsum.photos/400/400"
          alt="Image"
          className="w-full h-64 text-muted-foreground"
          width="48"
          height="48"
          style={{ aspectRatio: '48/48', objectFit: 'cover' }}
        />
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-bold">Title</h1>
        <p className="mt-4 text-base text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a sollicitudin leo.
          Morbi vel odio velit. Suspendisse ac mauris ac erat vulputate congue nec vitae sem. Proin
          vel ante quis arcu lobortis aliquet. Nullam leo nisl, efficitur vel fringilla non,
          dignissim vel enim. Nullam ipsum massa, facilisis ut maximus eget, viverra sed nisi.
          Integer pulvinar purus sed magna imperdiet semper. Maecenas quis scelerisque sem. Nullam
          et accumsan ipsum. Curabitur in sollicitudin nisl. Proin eu nunc quam. Aliquam semper
          laoreet iaculis.
        </p>
        <p className="mt-4 text-base text-muted-foreground">
          Vestibulum auctor vulputate laoreet. Ut ac lacus eu eros suscipit varius vel ultrices
          orci. Nam molestie ultrices tincidunt. Nulla non lacus lectus. Etiam consectetur erat sit
          amet tortor suscipit commodo. Etiam venenatis accumsan metus, sit amet ultricies ipsum
          finibus nec. Phasellus consequat orci quis eleifend sollicitudin. Aenean quam neque,
          lacinia sit amet egestas in, porttitor non leo. Sed tempus felis ut nisi semper, id
          bibendum justo vulputate.
        </p>
      </div>
      <div className="mt-8 border-t pt-4">
        <label htmlFor="comment" className="block text-sm font-medium text-muted-foreground">
          Comment
        </label>
        <Textarea id="comment" placeholder="Your comment" className="mt-2 w-full" />

        <Button
          className="mt-4 bg-blue-800 text-white w-3/12 rounded float-right"
          disabled={isSubmitting}
          onClick={() => setIsSubmitting(true)}
        >
          {isSubmitting && (
            <div className="mr-2 h-4 w-4 animate-spin contain rounded-full border-2 border-t-transparent" />
          )}
          Submit
        </Button>
      </div>
    </div>
  )
}

export default Post
