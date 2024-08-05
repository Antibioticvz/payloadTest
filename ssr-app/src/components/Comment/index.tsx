import { FC } from 'react'

export interface IComment {
  id: string | number
  text: string
}

const Comment: FC<IComment> = ({ id, text }) => (
  <p key={id} className="text-sm text-muted-foreground">
    {text}
  </p>
)

export default Comment
