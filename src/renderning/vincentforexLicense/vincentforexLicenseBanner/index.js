import React from 'react'
import styles from './vincentforexLicenseBanner.module.scss';
import CommonButton from '@/components/commonButton';

export default function VincentforexLicenseBanner() {
  return (
    <div>
      <div className="container-lg">
        <div className={styles.mauritiusForexLicenseBanner}>
          <div className={styles.buttonCenter}>
            <CommonButton text="Saint Lusia" />
          </div>
          <h2>
            Saint Lusia Company Formation &
            Forex License
          </h2>
          <p>
            Start your forex business in Saint Lusia with strict confidentiality
          </p>
        </div>
      </div>
    </div>
  )
}
