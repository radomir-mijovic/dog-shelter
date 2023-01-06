import React from 'react';
import styles from "../styles/Hero.module.scss"
import globalStyles from "../styles/Global.module.scss"
import uiStyles from "../styles/UI.module.scss"
import dogImage from "../public/images/dog1.png"
import Image from "next/image";

const Hero = () => {
    return (
        <section className={`${styles.heroWrapper} ${globalStyles.globalPadding}`}>
            <div className={styles.textContainer}>
                <div className={styles.textWrapper}>
                    <h3 className={globalStyles.globalH3}>
                        Svi zasluzuju prijatelja
                    </h3>
                    <h1 className={globalStyles.globalH1}>
                        Azil za napustene zivotinje - Budva
                    </h1>
                    <p className={globalStyles.globalP}>
                        Udruženje “RJ – Budva” je organizacija civilnog društva koja se bavi zaštitom životinja,
                        zagovarajući ideju prava životinja.
                    </p>
                </div>
                <button className={uiStyles.turquoiseButton}>
                    Pozovite nas
                </button>
            </div>
            <div className={styles.imageWrapper}>
                <Image src={dogImage} quality={100}  fill alt={"Dog walking"}/>
            </div>
        </section>
    );
};

export default Hero;