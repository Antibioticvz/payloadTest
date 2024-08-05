'use client' // This is a client component 👈🏽

import { FC, useState } from 'react'

import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Comment, { IComment } from '@/components/Comment'
import { createMarkup } from '@/lib/utils'

interface IPost {
  params: {
    id: string
    comments?: IComment[]
  }
}

const testHtml = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>!!!!!!Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`

const Post: FC<IPost> = ({ params }) => {
  const { id, comments } = params
  const [isSubmitting, setIsSubmitting] = useState(false)

  console.log(id)

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-muted w-full h-64 flex items-center justify-center">
        <img
          src="https://picsum.photos/800/800"
          alt="Post image"
          className="w-full h-64 text-muted-foreground"
        />
      </div>

      <div className="mt-6">
        <h1 className="text-2xl font-bold">Title</h1>

        <div
          className="flex flex-col mt-4 text-base text-muted-foreground  space-y-4"
          dangerouslySetInnerHTML={createMarkup(testHtml)}
        />
      </div>

      <div className="mt-8 mb-4 border-t pt-4">
        {comments?.map(comment => (
          <Comment {...comment} />
        ))}

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
