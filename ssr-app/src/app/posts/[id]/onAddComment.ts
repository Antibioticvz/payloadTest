'use server'

import { revalidatePath } from 'next/cache'

const onAddComment = async (previousState: { message: string }, formData: FormData) => {
  try {
    await fetch('http://localhost:3000/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: '*/*',
      },
      body: new URLSearchParams({
        text: formData.get('text')?.toString() || '@',
      }),
    })
      .then(async res => {
        const parsedResp = await res.json()

        const {
          doc: { id },
        } = parsedResp
      })
      .finally(() => revalidatePath('/posts/[id]'))

    return { message: `Added comment` }
  } catch (error) {
    return { message: `Error` }
  }
}

export default onAddComment
