import React from 'react'
import styles from './setupTrainingHowItWork.module.scss';
import CommonButton from '@/components/commonButton';

const steps = [
    {
        id: 1,
        title: 'Initial Consultation',
        description: 'We assess your exact MT4 / MT5 platform needs',
    },
    {
        id: 2,
        title: 'Platform Setup',
        description: 'We install and configure the trading servers',
    },
    {
        id: 3,
        title: 'Customization',
        description: 'Applying white-label branding and necessary plugins',
    },
    {
        id: 4,
        title: 'Training Sessions',
        description: 'Comprehensive tutorials on backend operations and CRM',
    },
    {
        id: 5,
        title: 'Ongoing Support',
        description: 'Continuous technical assistance whenever you need it',
    },
];

export default function SetupTrainingHowItWork() {
    return (
        <div className="container-lg">
            <div className={styles.setupTrainingHowItWork}>
                <div className="container">
                    <div className={styles.centerAlignment}>
                        <CommonButton text="Process" />
                    </div>
                    <h2>
                        How Our Setup & Training Works
                    </h2>
                    <p>
                        A seamless five-step approach to get your trading platform up and running efficiently.
                    </p>
                    <div className={styles.grid}>
                        {steps.map((step, index) => (
                            <div className={styles.gridItems} key={step.id}>
                                <div className={styles.center}>
                                    <div className={styles.counter}>
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                </div>
                                <h3>
                                    {step.title}
                                </h3>
                                <span>
                                    {step.description}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
