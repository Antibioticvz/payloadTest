'use server'

export default async function onAddComment(
  prevState: {
    message: string
  },
  // formData: FormData
  formData: FormData
) {
  // event.preventDefault()
  // const formData = new FormData(event.currentTarget)

  try {
    await fetch('http://localhost:3000/api/comments', {
      method: 'POST',
      body: {
        // @ts-ignore
        text: 'ssss',
      },
    })
    // Handle response if necessary
    // const data = await response.json()
    // ...
    return { message: `Added comment` }
  } catch (error) {
    return { message: `Error` }
  }
}
