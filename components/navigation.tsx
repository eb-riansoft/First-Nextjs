"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "../styles/navigation.module.css"

export default function Navigation(){
    const path = usePathname();
    console.log(path)
    return <nav className={styles.nav}>
        <ul>
        <Link href="/"><li>Home</li></Link>{path === "/" ? "🏡" : ""}
        <Link href="/about-us"><li>About Us</li></Link>{path === "/about-us" ? "🤓" : ""}
        </ul>
    </nav>
}