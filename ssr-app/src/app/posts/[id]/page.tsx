import { FC } from 'react'
import { FormEvent } from 'react'

import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Comment from '@/components/comment'
import { createMarkup } from '@/lib/utils'
import fetchData from '@/lib/fetchData'

import { Post as IPost } from '../../../../../payload/src/payload-types'
import { Comment as IComment } from '../../../../../payload/src/payload-types'
import CommentForm from './commentForm'

interface IPostPage {
  params: {
    id: string
  }
}

const Post: FC<IPostPage> = async ({ params }) => {
  const { id } = params
  const { title, text_html_, image, comments }: IPost = await fetchData(`posts/${id}`)

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-muted w-full h-64 flex items-center justify-center">
        <img
          src={image as string}
          alt="Post image"
          className="w-full text-muted-foreground"
          style={{ height: '100%' }}
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
        {(comments as IComment[])?.map(com => (
          <Comment {...com} />
        ))}

        <CommentForm />
      </div>
    </div>
  )
}

export default Post
