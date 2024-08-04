import PostList from '@/components/postList'

const Home = () => {
  return (
    <main className="flex flex-row flex-wrap items-center justify-center w-screen p-4">
      <PostList id="1" />
      <PostList id="2" />
    </main>
  )
}

export default Home
