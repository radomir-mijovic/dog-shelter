import React from 'react';
import styles from "../styles/Team.module.scss"
import globalStyles from "../styles/Global.module.scss"
import {team_data} from "../data/team_data";
import Image from "next/image";
import {Dela_Gothic_One} from '@next/font/google'

const deltaFont = Dela_Gothic_One({
    weight: "400",
    subset: ["latin"]
})

const Team = () => {
    return (
        <section className={`${styles.teamContainer} ${globalStyles.globalPadding}`}>
            <h1 className={styles.teamH1}>
                Upoznajte nas tim
            </h1>
            <p className={styles.teamP}>
                U RJ Azil je zaposljeno osmoro ljudi koji brinu o životinjama i uopšteno o ovom objektu.
            </p>
            <div className={styles.teamCardWrapper}>
                {team_data.map(member => {
                    return (
                        <div className={styles.teamCard} key={member.id}>
                            <div className={styles.imageWrapper}>
                                <Image src={member.image} alt={member.alt} fill />
                            </div>
                            <div className={styles.textWrapper}>
                                <h2 className={`${deltaFont.className} ${styles.teamCardH2}`}>
                                    {member.name}
                                </h2>
                                <p className={globalStyles.globalP}>
                                    {member.occupation}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Team;