// Generated types
import { Post } from '../../../payload/src/payload-types'
import { Comment as IComment } from '../../../payload/src/payload-types'

type IPost = Post & { comments: IComment[] }

export type { IPost, IComment }
