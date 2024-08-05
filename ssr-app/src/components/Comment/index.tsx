import { FC, Fragment } from 'react'

export interface IComment {
  id: string | number
  text: string
}

const Comment: FC<IComment> = ({ id, text }) => (
  <Fragment key={id}>
    <p className="text-sm text-muted-foreground">{text}</p>
  </Fragment>
)

export default Comment
