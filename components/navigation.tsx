"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation(){
    const path = usePathname();
    console.log(path)
    return <nav>
        <ul>
        <Link href="/"><li>Home</li></Link>{path === "/" ? "🏡" : ""}
        <Link href="/about-us"><li>About Us</li></Link>{path === "/about-us" ? "🤓" : ""}
        </ul>
    </nav>
}