'use client' // This is a client component 👈🏽

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

import onAddComment from './onAddComment'

const initialState = {
  text: '',
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      className="mt-4 bg-blue-800 text-white w-3/12 rounded float-right"
      disabled={pending}
    >
      {pending && (
        <div className="mr-2 h-4 w-4 animate-spin contain rounded-full border-2 border-t-transparent" />
      )}
      Submit
    </Button>
  )
}

const CommentForm = () => {
  const [state, formAction] = useActionState(onAddComment, initialState)

  return (
    <form action={formAction}>
      <label htmlFor="text" className="block text-sm font-medium text-muted-foreground">
        Comment
      </label>
      <Textarea id="text" required placeholder="Your comment" className="mt-2 w-full" />

      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  )
}

export default CommentForm
