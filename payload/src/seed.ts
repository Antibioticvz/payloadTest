import { Payload } from 'payload'
import { Post } from './payload-types'

const _dummyPostData = {
  title: 'Hello World Post Test',
  text: {
    root: {
      children: [
        {
          children: [
            {
              detail: 0,
              format: 1,
              mode: 'normal',
              style: '',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 0,
          indent: 0,
          type: 'paragraph',
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 1,
              mode: 'normal',
              style: '',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 1,
          indent: 0,
          type: 'paragraph',
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  },
  image: 'https://picsum.photos/400',
}

export const seed = async (payload: Payload): Promise<void> => {
  Array.from({ length: 13 }).map(
    async () =>
      // @ts-ignore
      await payload.create<Post>({
        collection: 'posts',
        data: _dummyPostData,
      })
  )
}
