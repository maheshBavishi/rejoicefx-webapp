import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/button';
import styles from './clientProfile.module.scss';
import Link from 'next/link';

const ClientProfileImage = '/assets/images/client-profile.png';

export default function ClientProfile() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95, x: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <div className={styles.clientProfileSection}>
            <div className="container">
                <div className={styles.twoColLayout}>
                    <motion.div
                        className={styles.leftCol}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <motion.div variants={textVariants} className={styles.logoText}>
                            POWERGEN
                            <div className={styles.logoSub}>TRADING PLATFORM</div>
                        </motion.div>

                        <motion.h2 variants={textVariants} className={styles.heading}>
                            ADVANCED MULTI-ASSET TRADING PLATFORM FOR MODERN BROKERS
                        </motion.h2>

                        <motion.p variants={textVariants} className={styles.description}>
                            A next-generation web terminal with ultra-fast execution, advanced charting, real-time market data and complete broker control – built to scale your brokerage globally.
                        </motion.p>

                        <motion.div variants={textVariants} className={styles.buttonGroup}>
                            <Link href="/contact-us">
                                <Button
                                    text="Request Demo"
                                    icon={
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    }
                                />
                            </Link>
                            <Link href="/contact-us">
                                <Button
                                    text="SCHEDULE CONSULTATION"
                                    outline={true}
                                />
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className={styles.rightCol}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={imageVariants}
                    >
                        <div className={styles.imageWrap}>
                            <img src={ClientProfileImage} alt="PowerGen Client Profile" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
