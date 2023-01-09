import React from 'react';
import styles from "../styles/DonateModal.module.scss"
import {motion} from "framer-motion";
import Image from "next/image";
import dogImage from "../public/images/dog5.jpg"

const DonateModal = ({modalHandler}) => {
    return (
        <section className={styles.donateModalContainer}>
            <motion.div
                initial={{y: -300, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: .3}}
                className={styles.modal}>
                <div className={styles.imageContainer}>
                    <Image src={dogImage} fill alt="dog laying"/>
                </div>
                <div className={styles.buttonContainer}>
                    <motion.button
                        onClick={modalHandler}
                        whileTap={{scale: .97}}
                        className={styles.button}>
                        Zatvori
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default DonateModal;