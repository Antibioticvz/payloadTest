import 'server-only'

import { Fragment } from 'react'
import PostList from '@/components/postList'
import { LoadMore } from '@/components/loadMore'
import fetchData from '@/lib/fetchData'

import { IPost } from '@/types/payloadCRM'

const Home = async () => {
  const data = await fetchData('posts?limit=5')

  return (
    <main className="flex flex-row flex-wrap items-center justify-center w-screen p-4">
      {data.docs.map((post: IPost) => (
        <Fragment key={post.id}>
          <PostList {...post} />
        </Fragment>
      ))}

      {data.hasNextPage && <LoadMore />}
    </main>
  )
}

export default Home
