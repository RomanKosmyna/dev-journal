"use client";

import DocsNavLink from './docs-nav-link';
import { usePathname } from "next/navigation";

import styles from "./docs-navigation.module.css";

const DocsNavigation = () => {
    const pathname = usePathname();

    return (
        <div className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <div className={styles.innerInnerWrapper}>
                    <div className={styles.div4}>
                        <aside className={styles.aside}>
                            <nav role="navigation" className={styles.nav}>
                                <ul>
                                    <h3 className={styles.header}>HEADER</h3>
                                    <DocsNavLink link={"/javascript"} text={"JavaScript"} links={["qwe1", "qwe2"]} currentUrl={pathname} />
                                    <DocsNavLink link={"/sql"} text={"SQL"} links={["sql1"]} currentUrl={pathname} />
                                    <DocsNavLink link={"/creatio"} text={"Creatio"} links={["creatio1", "creatio2", "creatio3"]} currentUrl={pathname} />
                                </ul>
                            </nav>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocsNavigation;
