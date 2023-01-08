import React from 'react';
import styles from "../styles/Footer.module.scss"
import Image from "next/image";
import logo from "../public/images/icons/Logo.svg"

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.imageContainer}>
                <Image src={logo} height={70} width={120} alt="logo" />
            </div>
            <h3 className={styles.footerH3}>
                info@rjazil.me
            </h3>
        </div>
    );
};

export default Footer;