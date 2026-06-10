import React from 'react'
import styles from './forexCrmCaseStudyBanner.module.scss';
import CommonButton from '@/components/commonButton';
export default function ForexCrmCaseStudyBanner() {
    return (
        <div>
            <div className="container-lg">
                <div className={styles.forexCrmBanner}>
                    <div className={styles.centeralignment}>
                        <CommonButton text="Forex CRM Platform Case Study" />
                    </div>
                    <h2>
                        Transforming a Traditional Forex Brokerage into a Scalable Digital Trading Ecosystem
                    </h2>
                    <p>
                        A rapidly growing forex brokerage was facing operational challenges due to disconnected systems, manual client onboarding, inefficient IB management, and limited visibility into customer activity. The broker needed a centralized Forex CRM solution that could streamline operations,
                        improve client acquisition, and support business growth.
                    </p>
                </div>
            </div>
        </div>
    )
}
