import { FC } from 'react'

import { Comment as IComment } from '../../../../payload/src/payload-types'

const Comment: FC<IComment> = ({ id, text }) => (
  <p key={id} className="text-sm text-muted-foreground mb-4">
    {text}
  </p>
)

export default Comment
