import PostList from '@/components/postList'

const Home = () => {
  return (
    <main className="flex flex-row flex-wrap items-center justify-center w-screen p-4">
      <PostList />
      <PostList />
    </main>
  )
}

export default Home
