// import { useState } from "react";

import styles from "./background.module.css";

import defBg from "@/src/assets/coolbackgrounds-unsplash-bean.jpg";

const Background = ({ children }: { children: React.ReactNode }) => {
    // const [chosenBackground, setChosenBackground] = useState(defBg);

    return (
        <div className={styles.hero} style={{ backgroundImage: `url(${defBg.src})` }}>
            {children}
        </div>
    )
};

export default Background;
