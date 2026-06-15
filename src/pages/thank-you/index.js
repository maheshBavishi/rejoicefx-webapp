import React, { useEffect, useState } from 'react';
import styles from './thankYou.module.scss';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Button from '@/components/button';

const CheckIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="url(#gradient)" />
        <path d="M20 32L28 40L44 24" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4B6BFB" />
                <stop offset="1" stopColor="#7C3AED" />
            </linearGradient>
        </defs>
    </svg>
);

const HomeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10L10 3L17 10M5 8.5V16.5C5 16.78 5.22 17 5.5 17H9V13H11V17H14.5C14.78 17 15 16.78 15 16.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ContactIcon = () => (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 5H17V15H3V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 5L10 11L17 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const SparkleIcon = ({ className }) => (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" fill="url(#sparkle)" />
        <defs>
            <linearGradient id="sparkle" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4B6BFB" />
                <stop offset="1" stopColor="#B0B0FF" />
            </linearGradient>
        </defs>
    </svg>
);

export default function ThankYouPage() {
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        setShowConfetti(true);
        const timer = setTimeout(() => setShowConfetti(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Head>
                <title>Thank You - GENXEL</title>
                <meta name="description" content="Thank you for contacting GENXEL. We will get back to you soon." />
            </Head>

            <div className={styles.thankYouPage}>
                {/* Animated background sparkles */}
                {showConfetti && (
                    <div className={styles.confettiContainer}>
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                className={styles.confettiPiece}
                                initial={{
                                    opacity: 0,
                                    y: 0,
                                    x: 0,
                                    scale: 0,
                                }}
                                animate={{
                                    opacity: [0, 1, 1, 0],
                                    y: [0, -80 - Math.random() * 120],
                                    x: [(Math.random() - 0.5) * 200],
                                    scale: [0, 1, 0.8, 0],
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 2 + Math.random() * 1,
                                    delay: Math.random() * 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                <SparkleIcon />
                            </motion.div>
                        ))}
                    </div>
                )}

                <div className="container">
                    <div className={styles.thankYouContent}>
                        {/* Checkmark Icon */}
                        <motion.div
                            className={styles.iconWrapper}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                        >
                            <div className={styles.iconGlow}></div>
                            <CheckIcon />
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Thank You!
                        </motion.h1>

                        {/* Sub Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            Your message has been received
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            We appreciate you reaching out to us. Our team will review your inquiry
                            and get back to you within <strong>24 hours</strong>. In the meantime,
                            feel free to explore our services.
                        </motion.p>

                        {/* Info Cards */}
                        <motion.div
                            className={styles.infoCards}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="#4B6BFB" strokeWidth="1.5" />
                                        <path d="M12 6V12L16 14" stroke="#4B6BFB" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Response Time</h4>
                                    <p>Within 24 hours</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="#4B6BFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Confirmation Email</h4>
                                    <p>Check your inbox</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="#4B6BFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Dedicated Support</h4>
                                    <p>Expert team assigned</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className={styles.ctaButtons}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <Link href="/" >
                                <Button text="Back to Home" />

                            </Link>
                            <Link href="/contact-us" >
                                <Button text="Contact Again" outline />

                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
