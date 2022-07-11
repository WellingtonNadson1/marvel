import Link from "next/link"
import styles from '../../styles/Home.module.css'

export default function Navbar(){
    return (
        <div className={styles.container}>
            <nav>
                <li>
                    <Link href="/">
                        <a> VIDEOS </a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a> CHARACTERES </a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a> COMICS </a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a> MOVIES </a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a> TV SHOWS </a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a> GAMES </a>
                    </Link>
                </li>
            </nav>
        </div>
    )
}