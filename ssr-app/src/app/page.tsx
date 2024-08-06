import 'server-only'

import { Fragment } from 'react'

import type { Metadata } from 'next'

import PostList from '@/components/postList'
import { LoadMore } from '@/components/loadMore'
import fetchData from '@/lib/fetchData'
import { IPost } from '@/types/payloadCRM'

export const metadata: Metadata = {
  title: 'NextJS App - Test task',
  description: 'A detailed amazing site description content',
  twitter: {
    card: 'summary_large_image',
    title: 'NextJS App - Test task',
    description: 'A detailed amazing site description content',
    creator: '@johndoe',
    site: '@johndoe',
    images: ['https://picsum.photos/640'],
  },
}

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
