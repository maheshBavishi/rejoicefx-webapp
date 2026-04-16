import React from 'react'
import styles from './whoIsThis.module.scss';
import SqureIcon from '@/components/icons/squreIcon';
import CommonButton from '@/components/commonButton';
export default function WhoIsThis() {
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
                                Startups launching a new prop trading firm
                            </p>
                        </div>
                        <div className={styles.items}>
                            <SqureIcon />
                            <p>
                                Existing prop firms looking to upgrade CRM
                            </p>
                        </div>
                        <div className={styles.items}>
                            <SqureIcon />
                            <p>
                                Forex brokers expanding into prop trading
                            </p>
                        </div>
                        <div className={styles.items}>
                            <SqureIcon />
                            <p>
                                Fintech entrepreneurs entering trading industry
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
