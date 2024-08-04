import { FC } from 'react'

interface IPost {
  params: {
    id: string
  }
}
const Post: FC<IPost> = ({ params }) => {
  return <p>Post: {params.id}</p>
}

export default Post
