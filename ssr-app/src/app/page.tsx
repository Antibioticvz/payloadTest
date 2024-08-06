import 'server-only'

import { Fragment } from 'react'
import PostList from '@/components/postList'
import fetchData from '@/lib/fetchData'

// Generated types
import { Post as IPost } from '../../../payload/src/payload-types'

const Home = async () => {
  const data = await fetchData('posts')

  return (
    <main className="flex flex-row flex-wrap items-center justify-center w-screen p-4">
      {data.docs.map((post: IPost) => (
        <Fragment key={post.id}>
          <PostList {...post} />
        </Fragment>
      ))}
    </main>
  )
}

export default Home
