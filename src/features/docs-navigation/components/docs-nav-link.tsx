import Link from "next/link";
import DropdownArrow from "@/src/components/ui/svg/dropdown-arrow";

import styles from "./docs-nav-link.module.css";

const DocsNavLink = (
    { link, text, links, currentUrl }: { link: string, text: string, links: string[], currentUrl: string }
) => {
    const isLinkSameAsCurrentUrl = currentUrl === link;
    console.log(isLinkSameAsCurrentUrl);
    return (
        <li>
            <Link title={text} className={styles.link} href={link}>
                <div>{text}</div>
                <DropdownArrow />
            </Link>
            <div className={styles.subLinkWrapper}>
                <div className={`${isLinkSameAsCurrentUrl ? styles.active : styles.notActive}`}>
                    <ul>
                        {links?.map((link) => {
                            return (
                                <li key={link}>
                                    <Link href={"/" + link} className={styles.link}>{link}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </li>
    )
};

export default DocsNavLink;
