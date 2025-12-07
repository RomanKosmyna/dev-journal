import DocsNavigation from "@/src/features/docs-navigation/components/docs-navigation";
import styles from "./docs.module.css";

export default function Docs() {
    return (
        <div className={styles.mainWrapper}>
            <DocsNavigation />
            <main className={styles.main}>
                Docs
            </main>
        </div>
    )
}
