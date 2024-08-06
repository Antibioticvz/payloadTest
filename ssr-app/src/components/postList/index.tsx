import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { createMarkup } from '@/lib/utils'

import { IPost } from '@/types/payloadCRM'

const PostList: FC<IPost> = ({ id, title, text_html_, image }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between pb-8 space-x-0 sm:space-x-8 w-3/4">
      <div className="lg:w-1/2 md:w-1/3 sm:w-full justify-center">
        <Image
          src={image as string}
          alt="Post Image"
          className="bg-gray-200 w-full aspect-square object-cover text-muted-foreground"
          width={400} // provided for server-side image optimization as we use remote images
          height={400} // provided for server-side image optimization as we use remote images
          priority
        />
      </div>

      <div className="lg:w-1/2 md:w-2/3 sm:w-full">
        <h2 className="text-2xl font-bold pl-4 pb-4 pl-4">{title}</h2>
        {text_html_ && (
          <div
            className="flex flex-col space-y-4 pl-4"
            dangerouslySetInnerHTML={createMarkup(text_html_)}
          />
        )}
        <Link href={`/posts/${id}`}>
          <Button
            data-testid={`post-btn-${id}`}
            className="mt-4 bg-blue-800 text-white w-3/12 rounded"
          >
            Button
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default PostList
