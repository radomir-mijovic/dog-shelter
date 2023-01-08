import React from 'react';
import styles from '../styles/About.module.scss'
import shelterImage from "../public/images/azil1.jpg"
import Image from "next/image";

const About = () => {
    return (
        <section className={styles.aboutContainer}>
            <div className={styles.textWrapper}>
                <h3 className={styles.boxH3}>
                    o azilu
                </h3>
                <p className={styles.boxP}>
                    Azil koji se prioritetno bavi zbrinjavanjem napuštenih pasa, danas je u potpuno novom estetskom
                    i funkcionalnom konceptu. Renovirani su pojedini objekti, popravljeni su krovovi na mjestima
                    na kojima je to bilo potrebno, posijana nova trava, prefarbane ograde koje su korozirale, uklonjen
                    šut, sređena unutrašnjost. Azil raspolaže sa 43 boksa, 7 sektora plus karantinski prostor
                    i zimarnik (za manje pse, tokom zime). Svaki novodovedeni pas se prvobitno smjesti u
                    karantinski prostor, gdje mora provesti 14 dana, da bi se ustanovilo da li je vlasnički
                    pas i da li ima nekih oboljenja. Tek nakon tog perioda, pas se odvodi na prilagođavanje
                    po sektorima, kako bi se za njega odabrao odgovarajući sektor i time njegov boravak u
                    azilu učinio prijatnijim.
                </p>
            </div>
            <div className={styles.imageWrapper}>
                <Image
                    src={shelterImage}
                    objectFit={"cover"}
                    // layout={"responsive"}
                    fill

                    // height={350}
                    // width={600}
                    alt="shelter image"/>
            </div>
        </section>
    );
};

export default About;