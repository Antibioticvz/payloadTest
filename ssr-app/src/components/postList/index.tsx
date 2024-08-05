import { FC } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { createMarkup } from '@/lib/utils'

import { Post as IPost } from '../../../../payload/src/payload-types'

const PostList: FC<IPost> = ({ id, title, text_html_, image }) => {
  return (
    <div key={id} className="flex flex-row justify-between pb-8 space-x-8 w-3/4">
      <img
        src={image as string}
        alt="Post Image"
        className="bg-gray-200 w-1/2"
        style={{ height: '350px', objectFit: 'cover' }}
      />

      <div className="w-1/2">
        <h2 className="text-2xl font-bold pl-4 pb-4 pl-4">{title}</h2>
        {text_html_ && (
          <div
            className="flex flex-col space-y-4 pl-4"
            dangerouslySetInnerHTML={createMarkup(text_html_)}
          />
        )}
        <Link href={`/posts/${id}`}>
          <Button className="mt-4 bg-blue-800 text-white w-3/12 rounded">Button</Button>
        </Link>
      </div>
    </div>
  )
}

export default PostList
