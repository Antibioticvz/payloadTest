import { FC } from 'react'

import { Comment as IComment } from '../../../../payload/src/payload-types'

const Comment: FC<IComment> = ({ text }) => (
  <p className="text-sm text-muted-foreground mb-4">{text}</p>
)

export default Comment
