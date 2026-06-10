import React from 'react';
import styles from './developmentProcess.module.scss';
import CommonButton from '@/components/commonButton';

const steps = [
    {
        step: '01',
        title: 'Discovery & Planning',
        points: ['Detailed business analysis', 'Brokerage workflow mapping', 'Compliance requirement study', 'Scalability planning'],
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z" />
            </svg>
        ),
    },
    {
        step: '02',
        title: 'UI/UX Design',
        points: ['Admin dashboard design', 'Sales team interface', 'IB partner portal UI', 'Trader & compliance views'],
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V8z" />
            </svg>
        ),
    },
    {
        step: '03',
        title: 'Agile Development',
        points: ['Angular & React frontend', 'Node.js & Laravel backend', 'PostgreSQL database', 'AWS cloud infrastructure'],
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
        ),
    },
    {
        step: '04',
        title: 'Testing & Deployment',
        points: ['Security validation', 'Performance benchmarking', 'Scalability testing', 'Regulatory compliance checks'],
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
        ),
    },
];

export default function DevelopmentProcess() {
    return (
        <div className="container-lg">
            <div className={styles.developmentProcessSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <div className={styles.center}>
                            <CommonButton text="How We Built It" />
                        </div>
                        <h2>Development Process</h2>
                        <p>
                            A structured, agile approach ensuring quality delivery at every stage of the project.
                        </p>
                    </div>
                    <div className={styles.stepsGrid}>
                        {steps.map((step, idx) => (
                            <div className={styles.stepCard} key={idx}>
                                <div className={styles.stepNumber}>{step.step}</div>
                                <div className={styles.stepIconWrap}>{step.icon}</div>
                                <h3>{step.title}</h3>
                                <div className={styles.pointList}>
                                    {step.points.map((point, i) => (
                                        <div className={styles.point} key={i}>{point}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
