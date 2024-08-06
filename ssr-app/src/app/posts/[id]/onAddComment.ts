'use server'

import { revalidatePath } from 'next/cache'

const onAddComment = async (previousState: any, formData: FormData) => {
  try {
    await fetch(`${process.env.PAYLOAD_API}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: formData.get('text'),
        post: Number(formData.get('postId')),
      }),
    }).finally(() => revalidatePath(`/posts/${formData.get('postId')}`))

    return { message: `Added comment` }
  } catch (error) {
    return { message: `Error` }
  }
}

export default onAddComment
