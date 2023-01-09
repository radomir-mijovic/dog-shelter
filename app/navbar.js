"use client"
import React, {useState} from 'react';
import styles from '../styles/Navbar.module.scss'
import UIstyles from '../styles/UI.module.scss'
import globalStyles from '../styles/Global.module.scss'
import Image from "next/image";
import logo from "../public/images/icons/Logo.svg"
import {motion} from "framer-motion";
import DonateModal from "./donate-modal";
import {useScrollLock} from "@mantine/hooks";

const Navbar = () => {
    const [isModal, setIsModal] = useState(false)
    const [isScrollLocked, setIsScrollLocked] = useScrollLock()

    function modalHandler() {
        setIsModal(prevState => !prevState)
        setIsScrollLocked(prevState => !prevState)
    }

    return (
        <>
            <nav className={`${styles.navbarWrapper} ${globalStyles.globalPadding}`}>
                <div className={styles.logoWrapper}>
                    <Image src={logo} height={70} width={120} alt="Man walking dog"/>
                </div>
                <motion.button
                    onClick={modalHandler}
                    initial={{scale: 0}}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: .5 }}
                    whileTap={{scale: .97}}
                    className={`${UIstyles.redButton}`}>
                    Doniraj
                </motion.button>
            </nav>
            {isModal && <DonateModal modalHandler={modalHandler}/>}
        </>
    );
};

export default Navbar;