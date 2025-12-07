import { ReactNode } from 'react';

import styles from "./page-layout.module.css";

type PageLayoutProps = {
    children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.innerWrapper}>
                {children}
            </div>
        </div>
    );
};

export default PageLayout;
