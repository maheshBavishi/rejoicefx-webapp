import React from 'react'
import styles from './pspPartnersHero.module.scss';
import CommonButton from '@/components/commonButton';
export default function PspPartnersHero() {
    return (
        <div className="container-lg">
            <div className={styles.mauritiusForexLicenseBanner}>
                <div className={styles.buttonCenter}>
                    <CommonButton text="PSP & Payment Gateway Partners" />
                </div>
                <h2>
                    Forex PSP & Payment Gateway Partners
                </h2>
                <p>
                    At Genxel Technology, we connect forex brokers with reliable and high-performance Payment Service Providers (PSPs)
                    to ensure smooth deposits, withdrawals, and global payment processing.
                </p>
            </div>
        </div>
    )
}
