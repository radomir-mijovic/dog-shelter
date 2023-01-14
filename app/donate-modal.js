import React from 'react';
import styles from "../styles/DonateModal.module.scss"
import globalStyles from "../styles/Global.module.scss"
import {motion} from "framer-motion";
import Image from "next/image";
import piggyBankImage from "../public/images/piggy_bank.webp"

const DonateModal = ({modalHandler}) => {
    return (
        <section className={styles.donateModalContainer}>
            <motion.div
                initial={{y: -300, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: .3}}
                className={styles.modal}>
                <div className={styles.imageContainer}>
                    <Image src={piggyBankImage} fill objectFit={"cover"} alt="dog laying"/>
                </div>
                <div className={styles.textContainer}>
                    <h3 style={{textAlign: "center"}} className={globalStyles.globalH3}>
                        Hvala Vam sto vjerujete u nas
                    </h3>
                    <p style={{textAlign: "start"}} className={globalStyles.globalP}>
                        Donaciju mozete izvrsiti uplaton na racun u CKB banci
                    </p>
                    <ul>
                        <li className={styles.listItem}>
                            Broj racuna: 510-0000-00
                        </li>
                        <li className={styles.listItem}>
                            Primalac: Rj Azil Budva
                        </li>
                        <li className={styles.listItem}>
                            Svrha uplate: Donacija
                        </li>
                    </ul>
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