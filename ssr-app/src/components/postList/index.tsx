import { Button } from '@/components/ui/button'

function createMarkup(html: string) {
  return { __html: html }
}

const PostList = () => {
  const testHtml = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`

  return (
    <div className="flex flex-row justify-between pb-8 space-x-8 w-3/4">
      <img
        src="https://picsum.photos/300/400"
        alt="Placeholder"
        className="w-66 h-66 bg-gray-200"
        width="250"
        height="250"
        style={{ aspectRatio: '250/250', objectFit: 'cover' }}
      />

      <div>
        <h2 className="text-2xl font-bold pl-4 pb-4 pl-4">Title</h2>
        <div
          className="flex flex-col space-y-4 pl-4"
          dangerouslySetInnerHTML={createMarkup(testHtml)}
        />
        <Button className="mt-4 bg-blue-800 text-white w-3/12 rounded">Button</Button>
      </div>
    </div>
  )
}

export default PostList
