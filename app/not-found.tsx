import { Metadata } from 'next'

export const metadata:Metadata = {
    title: "Not Found"
}

export default function NotFound(){
    return <h1>You are lost! 🤪</h1>
}