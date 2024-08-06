'use client' // This is a client component 👈🏽

import { FC, useState, Fragment } from 'react'

import { Button } from '@/components/ui/button'
import PostList from '@/components/postList'
import fetchPosts from '@/lib/fetchPosts'

// Generated types
import { Post as IPost } from '../../../../payload/src/payload-types'

export const LoadMore: FC = () => {
  const [pending, setPending] = useState(false)
  const [nextPage, setNextPage] = useState<number | null>(2)

  const [posts, setPosts] = useState<IPost[]>([])

  const loadMore = async () => {
    setPending(true)
    const jsonData = await fetchPosts(nextPage).finally(() => setPending(false))

    setNextPage(jsonData.nextPage)
    setPosts([...posts, ...jsonData.docs])
  }

  return (
    <>
      {posts.map((post: IPost) => (
        <Fragment key={post.id}>
          <PostList {...post} />
        </Fragment>
      ))}

      {nextPage && (
        <Button
          disabled={pending}
          onClick={loadMore}
          variant="link"
          className="ml-auto text-gray-500 w-full"
        >
          {pending ? 'Loading...' : 'Read more'}
        </Button>
      )}
    </>
  )
}