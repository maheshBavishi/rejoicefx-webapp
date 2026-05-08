import React from 'react'
import styles from './formationSection.module.scss';
import Image from 'next/image';
import CommonButton from '@/components/commonButton';
import Button from '@/components/button';
import RightLgArrow from '@/components/icons/rightLgArrow';
const Image4 = '/assets/images/img04.png';
export default function FormationSection() {
  return (
    <div>
      <div className={styles.companyFormationAlignment}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.griditems}>
              <Image src={Image4} layout="fill" />
            </div>
            <div className={styles.griditems}>
              <div>
                <CommonButton text="St. Vincent Company Formation" />
                <h3>Start Your Forex Brokerage Business in Saint Lucia</h3>
                <p>
                  Saint Lucia offers a flexible and tax-efficient environment for launching your forex brokerage. With 0% corporate tax on international income, no restrictions on foreign ownership, and a fast incorporation process, it has become a preferred destination
                  for global brokers.
                </p>
                <p>
                  You benefit from low setup requirements, no need for a physical office, reliable payment solutions, and a smooth onboarding process. With GENXEL, you get complete support for Saint Lucia company formation, legal setup, and forex brokerage infrastructure — everything you need to go live
                  quickly and scale globally.
                </p>
                <div className={styles.firstButton}>
                  <Button text="Yes, I Want To Incorporate" icon={<RightLgArrow />} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
