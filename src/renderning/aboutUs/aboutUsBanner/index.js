import React from 'react'
import styles from './aboutUsBanner.module.scss';
import CommonButton from '@/components/commonButton';
export default function AboutUsBanner() {
    return (
        <div className="container-lg">
            <div className={styles.contactUsBanner}>
                <div className={styles.btnCenter}>
                    <CommonButton text="About GENXEL" />
                </div>
                <h2>
                    About GENXEL
                </h2>
                <p>GENXEL is a leading provider of innovative financial technology solutions, dedicated to empowering businesses with cutting-edge tools and services. Our platform is designed to streamline operations, enhance efficiency, and drive growth for our clients across various industries.</p>
            </div>
        </div>
    )
}
