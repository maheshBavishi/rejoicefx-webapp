import React from 'react';
import styles from './whyGenxel.module.scss';
import CommonButton from '@/components/commonButton';

const reasons = [
    {
        title: 'Industry Expertise',
        description: 'Deep understanding of forex brokerage and trading platform ecosystems built over years of practice.',
        icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>,
    },
    {
        title: 'Fully Custom Development',
        description: 'Custom UI/UX, modules, workflows, and integrations tailored precisely to your business requirements.',
        icon: <svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" /></svg>,
    },
    {
        title: 'Scalable Architecture',
        description: 'Designed for high concurrency and growing global trading businesses without performance limits.',
        icon: <svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" /></svg>,
    },
    {
        title: 'Secure Infrastructure',
        description: 'Enterprise-grade security and encrypted trading communication protecting your business and clients.',
        icon: <svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>,
    },
    {
        title: 'Fast Deployment',
        description: 'Launch your branded trading platform quickly and efficiently with our streamlined delivery process.',
        icon: <svg viewBox="0 0 24 24"><path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5l5-3-1.22-1.22C19.91 16.26 22 13.28 22 10c0-5.18-3.94-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.28 2.09 6.26 5.22 7.78L6 21l5 3v-5l-2.28 2.28C6.81 20 5 17.21 5 14c0-4.08 3.05-7.44 7-7.93V2.05z" /></svg>,
    },
    {
        title: 'Ongoing Technical Support',
        description: 'Dedicated maintenance and platform support after deployment, ensuring uninterrupted operations.',
        icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" /></svg>,
    },
];

export default function WhyGenxel() {
    return (
        <div className={styles.whyGenxelSection}>
            <div className="container-lg">
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <div className={styles.center}>
                            <CommonButton text="Why Genxel" />
                        </div>
                        <h2>Why Choose Genxel Technology?</h2>
                        <p>Your trusted technology partner for building world-class trading platforms.</p>
                    </div>
                    <div className={styles.expertiseGrid}>
                        {reasons.map((reason, idx) => (
                            <div className={styles.expertiseCard} key={idx}>
                                <div className={styles.iconWrap}>{reason.icon}</div>
                                <h3>{reason.title}</h3>
                                <p>{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
