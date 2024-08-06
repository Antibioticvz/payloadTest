'use client' // This is a client component 👈🏽

import { useFormStatus } from 'react-dom'
import { useActionState, FC } from 'react'

import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

import onAddComment from '../../lib/onAddComment'

interface ICommentForm {
  postId: string
}

const CommentForm: FC<ICommentForm> = ({ postId }) => {
  const { pending } = useFormStatus()
  const [, formAction] = useActionState(onAddComment, null)

  return (
    <>
      <form action={formAction}>
        <label htmlFor="text" className="block text-sm font-medium text-muted-foreground ml-4">
          Comment
        </label>
        <Textarea
          id="text"
          name="text"
          required
          placeholder="Your comment"
          className="mt-2 w-full"
        />

        {/* Have to pass postId to the form */}
        <input name="postId" id="postId" type="hidden" value={postId} />

        <Button
          formAction={formAction}
          className="mt-4 bg-blue-800 text-white w-3/12 rounded float-right"
          disabled={pending}
        >
          {pending && (
            <div className="mr-2 h-4 w-4 animate-spin contain rounded-full border-2 border-t-transparent" />
          )}
          Submit
        </Button>
      </form>
    </>
  )
}

export default CommentForm
