import Song from "../../src/components/sections/Song/Song"

async function getData(id) {
    const res = await fetch(`http://localhost:3000/songs/${id}`)
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function Page({params}) {
  const data = await getData(params.song)

  return <Song song={data.song}/>
}