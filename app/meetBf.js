import React from 'react';
import styles from "../styles/MeetBf.module.scss"
import globalStyles from "../styles/Global.module.scss"
import Image from "next/image";
import {dogs} from "../data/dogs";
import dogWalker from "../public/images/icons/dog-walker.svg"

const MeetBf = () => {
    return (
        <section className={`${styles.meetContainer} ${globalStyles.globalPadding}`}>
            <h2 className={styles.meetHeaderText}>
                Upoznajte n(V)ase najbolje prijatelje
            </h2>
            <div className={styles.dogsWrapper}>
                {dogs.map(dog => {
                    return (
                        <div style={{position: "relative"}} key={dog.id}>
                            <div className={styles.dogCard}>
                                <Image
                                    style={{borderRadius: "50%"}}
                                    src={dog.image}
                                    objectFit={"cover"}
                                    quality={100}
                                    fill
                                    alt="dog image" />
                            </div>
                            <div className={styles.dogInfo}>
                                <Image src={dogWalker} width={40} height={30} alt={"dog walker"}/>
                                <h4 className={styles.dogInfoText}>
                                    {dog.name}
                                </h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default MeetBf;