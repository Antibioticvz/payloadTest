async function fetchData(slug: string) {
  const res = await fetch(`${process.env.PAYLOAD_API}/${slug}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const jsonData = await res.json()
  return jsonData
}

export default fetchData
// Usage on server only
// const data = await fetchData();
