import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href={"/"} className={styles.link}>Home</Link>
            <Link href={"/docs"} className={styles.link}>Docs</Link>
            <Link href={"/about"} className={styles.link}>About</Link>
        </header>
    )
}
