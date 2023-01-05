import React from 'react';
import styles from '../styles/Navbar.module.scss'
import UIstyles from '../styles/UI.module.scss'
import globalStyles from '../styles/Global.module.scss'
import Image from "next/image";
import logo from "../public/images/icons/character.svg"
import { Mulish } from '@next/font/google'

const mulish = Mulish({
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ['latin']
})

const Navbar = () => {
    return (
        <nav className={`${styles.navbarWrapper} ${globalStyles.globalPadding}`}>
            <div className={styles.logoWrapper}>
                <Image src={logo} height={40} width={40} alt="Man walking dog"/>
                <div className={styles.textWrapper}>
                    <h4 className={styles.logoH4}>RJ Azil</h4>
                    <h5 className={`${mulish.className} ${styles.logoH5}`}>Budva</h5>
                </div>
            </div>
            <button className={`${UIstyles.redButton}`}>
                Doniraj
            </button>
        </nav>
    );
};

export default Navbar;