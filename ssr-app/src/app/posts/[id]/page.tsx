import 'server-only'

import { FC, Fragment } from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'

import Comment from '@/components/singleComment'
import { createMarkup } from '@/lib/utils'
import fetchData from '@/lib/fetchData'
import CommentForm from '@/components/commentForm'
import { IPost } from '@/types/payloadCRM'

interface IPostPage {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: IPostPage): Promise<Metadata> {
  const { id } = params
  const { title, meta }: IPost = await fetchData(`posts/${id}`)

  return {
    title: meta?.title || `Test blog post - ${title}`,
    description: meta?.description || 'Just a test blog post',
  }
}

const Post: FC<IPostPage> = async ({ params }) => {
  const { id } = params
  const { title, text_html_, image, comments }: IPost = await fetchData(`posts/${id}`)

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-muted w-full h-64 flex items-center justify-center">
        <Image
          src={image as string}
          alt="Post image"
          className="w-full h-full object-cover text-muted-foreground"
          width={400} // provided for server-side image optimization as we use remote images
          height={400} // provided for server-side image optimization as we use remote images
          priority
        />
      </div>

      <div className="mt-6">
        <h1 className="text-2xl font-bold">{title}</h1>

        {text_html_ && (
          <div
            className="flex flex-col mt-4 text-base text-muted-foreground space-y-4"
            dangerouslySetInnerHTML={createMarkup(text_html_)}
          />
        )}
      </div>

      <div className="mt-8 mb-4 border-t pt-4">
        {comments?.reverse().map(com => (
          <Fragment key={com.id}>
            <Comment {...com} />
          </Fragment>
        ))}

        <CommentForm postId={id} />
      </div>
    </div>
  )
}

export default Post
