import DocsNavigation from "@/src/features/docs-navigation/components/docs-navigation";
import PageNavigation from "@/src/features/page-navigation/components/page-navigation";

import styles from "./docs-layout.module.css";

type DocsLayoutProps = {
    children: React.ReactNode;
};

const DocsLayout = ({ children }: DocsLayoutProps) => {
    return (
        <div className={styles.outerWrapper}>
            <DocsNavigation />
            <div className={styles.contentWrapper}>
                {children}
            </div>
            <PageNavigation />
        </div>
    )
};

export default DocsLayout;
