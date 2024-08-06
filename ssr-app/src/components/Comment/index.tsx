import { FC } from 'react'

import { IComment } from '@/types/payloadCRM'

const Comment: FC<IComment> = ({ text }) => (
  <p className="text-sm text-muted-foreground mb-4">{text}</p>
)

export default Comment
