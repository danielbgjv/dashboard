import React from "react";
import styles from "../../styles/Home.module.css";
/* import Image from "../../images/watermark.png"; */
import Image from 'next/image';
import { images } from "../../next.config";

function Header() {
    return (
        <div className={styles.headcontainer}>
            <div className={styles.headwrapper}>
                <div className={styles.title}>
                    <h2>
                        Olá, <span>Thiago</span>
                    </h2>
                    <p>Bem vindo ao painel.</p>
                </div>
                <div className={styles.profile}>

                    <Image src='/watermark.png' alt="profile" height={40} width={40} className={styles.image} />
                    {/* <img src={Image} alt="profile" className={styles.image} /> */}
                </div>
            </div>
        </div>
    );
}

export default Header;