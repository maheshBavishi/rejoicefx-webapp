import React from 'react'
import styles from './mamPammSocialHerobanner.module.scss';
import CommonButton from '@/components/commonButton';

export default function MamPammSocialHerobanner() {
    return (
        <div>
            <div className="container-lg">
                <div className={styles.mauritiusForexLicenseBanner}>
                    <div className={styles.buttonCenter}>
                        <CommonButton text="Powerful MAM/PAMM Social Trading Solutions" />
                    </div>
                    <h2>
                        Powerful MAM/PAMM Social Trading Solutions for Brokers & Fund Managers
                    </h2>
                    <p>
                        Streamline fund management and maximize trading efficiency with
                        <b>GENXEL MAM/PAMM Social Trading Platform. </b> Designed for brokers, asset managers, and professional traders, our solution enables you to manage multiple client accounts from a single master account with precision, transparency, and automation.
                    </p>
                </div>
            </div>
        </div>
    )
}
