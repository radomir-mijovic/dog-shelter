import React from 'react';
import styles from "../styles/Reason.module.scss"
import globalStyles from "../styles/Global.module.scss"
import animalImage from "../public/images/animals.jpg"
import Image from "next/image";

const Reason = () => {
    return (
        <section className={`${styles.reasonContainer} ${globalStyles.globalPadding}`}>
            <div className={styles.textContainer}>
                <h3 className={styles.reasonH3}>
                    10 Razloga zasto bi trebali da usvojite zivotinju
                </h3>
                <div>
                    <p className={styles.reasonP}>
                        Usvajanjem spasavate zivot
                    </p>
                    <p className={styles.reasonP}>
                        Pomazete u overpopulaciji zivotinja
                    </p>
                    <p className={styles.reasonP}>
                        Pronacice te ljubimca iz snova
                    </p>
                    <p className={styles.reasonP}>
                        Dobijate prednosti odraslog psa
                    </p>
                    <p className={styles.reasonP}>
                        Dobijate long-term pomoc zaposlenih
                    </p>
                    <p className={styles.reasonP}>
                        Usvajate zdravog psa
                    </p>
                    <p className={styles.reasonP}>
                        Poboljsacete njihov i vas zivot
                    </p>
                    <p className={styles.reasonP}>
                        Pomazete u izgradnji humanog drustva
                    </p>
                    <p className={styles.reasonP}>
                        Dobijate odlican dodatak u porodici
                    </p>
                    <p className={styles.reasonP}>
                        Usvjajanjem spasavate zivot
                    </p>
                </div>
            </div>
            <div className={styles.imageWrapper}>
                <Image src={animalImage} quality={100} fill alt={"Dog walking"}/>
            </div>
        </section>
    );
};

export default Reason;