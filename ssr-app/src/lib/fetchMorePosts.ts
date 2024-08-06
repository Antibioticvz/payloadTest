'use server'

async function fetchMorePosts(nextPage: number | null) {
  const res = await fetch(`${process.env.PAYLOAD_API}/posts?limit=5&page=${nextPage}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const jsonData = await res.json()
  return jsonData
}

export default fetchMorePosts
