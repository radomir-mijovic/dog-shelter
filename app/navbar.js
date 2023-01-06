"use client"
import React from 'react';
import styles from '../styles/Navbar.module.scss'
import UIstyles from '../styles/UI.module.scss'
import globalStyles from '../styles/Global.module.scss'
import Image from "next/image";
import logo from "../public/images/icons/Logo.svg"
import {motion} from "framer-motion";

const Navbar = () => {
    return (
        <nav className={`${styles.navbarWrapper} ${globalStyles.globalPadding}`}>
            <div className={styles.logoWrapper}>
                <Image src={logo} height={70} width={120} alt="Man walking dog"/>
            </div>
            <motion.button
                initial={{scale: 0}}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                whileTap={{scale: .97}}
                className={`${UIstyles.redButton}`}>
                Doniraj
            </motion.button>
        </nav>
    );
};

export default Navbar;