import { API_URL } from '../app/(home)/page';

async function getMovie(id:string) {
    console.log(`Fetching Movie: ${Date.now()}`)
    await new Promise ((resolve) => setTimeout(resolve, 1000))
    const response = await fetch(`${API_URL}/${id}`);
    return response.json()
}

export default async function MovieInfo({id}:{id:string}){
    const movie = await getMovie(id)
    return <div>
        <h3>Info</h3>
        <h5>{JSON.stringify(movie)}</h5>
    </div>
}
