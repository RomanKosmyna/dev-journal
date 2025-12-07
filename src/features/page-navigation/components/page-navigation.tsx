import styles from "./page-navigation.module.css";

const PageNavigation = () => {
    return (
        <div className={styles.mainWrapper}>
            <nav role="navigation" className={styles.nav}>
                <h2>On this page</h2>
                <div className={styles.listWrapper}></div>
            </nav>
        </div>
    )
};

export default PageNavigation;
