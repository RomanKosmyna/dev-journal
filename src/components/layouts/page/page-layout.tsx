import { ReactNode } from 'react';

import styles from "./page-layout.module.css";

type PageLayoutProps = {
    children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <main className={styles.main}>
            <div className={styles.innerWrapper}>
                {children}
            </div>
        </main>
    );
};

export default PageLayout;
