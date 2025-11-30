import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.innerWrapper}>
                <Link href={"/"} className={styles.link}>Base</Link>
                <Link href={"/home"} className={styles.link}>Home</Link>
                <Link href={"/docs"} className={styles.link}>Docs</Link>
                <Link href={"/about"} className={styles.link}>About</Link>
            </div>
        </header>
    )
}
