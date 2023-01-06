import React from 'react';
import styles from "../styles/HeroLower.module.scss";
import globalStyles from "../styles/Global.module.scss";
import uiStyles from "../styles/UI.module.scss";
import Image from "next/image";
import dogImage from "../public/images/dog2.png";

const HeroLower = () => {
    return (
        <section className={`${styles.heroWrapper} ${globalStyles.globalPadding}`}>
            <div className={styles.imageWrapper}>
                <Image src={dogImage} quality={100}  fill alt={"Dog walking"}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.textWrapper}>
                    <h3 className={globalStyles.globalH3}>
                        poboljsajte njihov i vas zivot
                    </h3>
                    <h1 className={globalStyles.globalH1}>
                        Ne kupuj,
                        usvoji!
                    </h1>
                    <p className={globalStyles.globalP}>
                        Pozivamo sugrađane da posjete naše ljubimce utorkom i četvrtkom od 12h do 14h.
                    </p>
                </div>
                <button className={uiStyles.turquoiseButton}>
                    Pozovite nas
                </button>
            </div>
        </section>
    );
};

export default HeroLower;