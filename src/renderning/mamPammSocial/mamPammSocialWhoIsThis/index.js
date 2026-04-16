import React from 'react'
import styles from './mamPammSocialWhoIsThis.module.scss';
import SqureIcon from '@/components/icons/squreIcon';
import CommonButton from '@/components/commonButton';

export default function MamPammSocialWhoIsThis() {
    return (
        <div className=''>
            <div className={styles.whoIsThis}>
                <div className='container'>
                    <div className={styles.cemteralignment}>
                        <CommonButton text="Who Is This For?" />
                    </div>
                    <h2>
                        Who Is This For?
                    </h2>
                    <div className={styles.twoCol}>
                        <div className={styles.items}>
                            <SqureIcon />
                            <p>
                                Forex Brokers
                            </p>
                        </div>
                        <div className={styles.items}>
                            <SqureIcon />
                            <p>
                                Asset Managers
                            </p>
                        </div>
                        <div className={styles.items}>
                            <SqureIcon />
                            <p>
                                Fund Managers
                            </p>
                        </div>
                        <div className={styles.items}>
                            <SqureIcon />
                            <p>
                                Trading Firms
                            </p>
                        </div>
                        <div className={styles.items}>
                            <SqureIcon />
                            <p>
                                High Net-Worth Individual Traders
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
