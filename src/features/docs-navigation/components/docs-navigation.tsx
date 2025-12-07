import styles from "./docs-navigation.module.css";
import DocsNavLink from './docs-nav-link';

const DocsNavigation = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <div className={styles.innerInnerWrapper}>
                    <div className={styles.div4}>
                        <aside className={styles.aside}>
                            <nav role="navigation" className={styles.nav}>
                                <ul>
                                    <h3>GET STARTED</h3>
                                    <DocsNavLink link={"/javascript"} text={"JavaScript"} />
                                    <DocsNavLink link={"/sql"} text={"SQL"} />
                                    <DocsNavLink link={"/creatio"} text={"Creatio"} />
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
