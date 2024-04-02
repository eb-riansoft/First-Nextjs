import { API_URL } from '../app/(home)/page'

async function getVideos(id:string) {
        console.log(`Fetching Video: ${Date.now()}`)
        await new Promise ((resolve) => setTimeout(resolve, 1000))
        const response = await fetch(`${API_URL}/${id}/videos`)
        const data = response.json()
        return data;
}

export default async function MovieVideos({id}:{id:string}){
    const videos = await getVideos(id)
    return( <div>
        <h3>Videos</h3>
        <h5>{JSON.stringify(videos)}</h5>
    </div>)
}