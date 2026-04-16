import React from 'react'
import styles from './copyTradingwho.module.scss';
import SqureIcon from '@/components/icons/squreIcon';
import CommonButton from '@/components/commonButton';
const whoInfo = [
    { id: 1, title: 'Forex Brokers' },
    { id: 2, title: 'Prop Trading Firms' },
    { id: 3, title: 'Asset Managers' },
    { id: 4, title: 'Trading Educators' },
    { id: 5, title: 'Fintech Startups' },
];

export default function CopyTradingWho() {
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
                        {whoInfo.map((item) => (
                            <div className={styles.items} key={item.id}>
                                <SqureIcon />
                                <p>
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
  )
}

