import { FC } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { createMarkup } from '@/lib/utils'

interface IPostList {
  id: string | number
}

const PostList: FC<IPostList> = ({ id }) => {
  const testHtml = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`

  return (
    <div key={id} className="flex flex-row justify-between pb-8 space-x-8 w-3/4">
      <img
        src="https://picsum.photos/400/400"
        alt="Post Image"
        className="bg-gray-200 w-1/2"
        style={{ height: '350px', objectFit: 'cover' }}
      />

      <div className="w-1/2">
        <h2 className="text-2xl font-bold pl-4 pb-4 pl-4">Title</h2>
        <div
          className="flex flex-col space-y-4 pl-4"
          dangerouslySetInnerHTML={createMarkup(testHtml)}
        />
        <Link href={`/posts/${id}`}>
          <Button className="mt-4 bg-blue-800 text-white w-3/12 rounded">Button</Button>
        </Link>
      </div>
    </div>
  )
}

export default PostList
