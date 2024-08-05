import 'server-only'

import PostList from '@/components/postList'
import fetchData from '@/lib/fetchData'

// Generated types
import { Post as IPost } from '../../../payload/src/payload-types'

const Home = async () => {
  const data = await fetchData('posts')

  return (
    <main className="flex flex-row flex-wrap items-center justify-center w-screen p-4">
      {data.docs.map((post: IPost) => (
        <PostList {...post} />
      ))}
    </main>
  )
}

export default Home
