import Library from "../src/components/sections/Library/Library"

async function getData() {
  const res = await fetch('http://localhost:3000/songs')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export default async function Page() {
  const data = await getData()

  return (
    <Library songs={data.songs}/>
  )
}
