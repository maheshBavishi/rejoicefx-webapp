import React from 'react'
import styles from './pspPartnersDetails.module.scss';
import CommonButton from '@/components/commonButton';
import Image from 'next/image';
import { motion } from 'framer-motion';

// SVG Icons for features section
const EasyIntegrationIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#EBF0FF" />
        <path d="M20 12L14 18H18V26H22V18H26L20 12Z" fill="#4B6BFB" />
        <path d="M14 28H26V30H14V28Z" fill="#4B6BFB" />
    </svg>
);

const LowFeesIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#EBF0FF" />
        <path d="M20 11C15.03 11 11 15.03 11 20C11 24.97 15.03 29 20 29C24.97 29 29 24.97 29 20C29 15.03 24.97 11 20 11ZM21 25H19V23H21V25ZM21 21H19V15H21V21Z" fill="#4B6BFB" />
    </svg>
);

const SecureIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#EBF0FF" />
        <path d="M20 11L13 14V19C13 23.55 16.05 27.74 20 29C23.95 27.74 27 23.55 27 19V14L20 11ZM18.5 24L15 20.5L16.41 19.09L18.5 21.17L23.59 16.09L25 17.5L18.5 24Z" fill="#4B6BFB" />
    </svg>
);

const GlobalIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#EBF0FF" />
        <path d="M20 11C15.03 11 11 15.03 11 20C11 24.97 15.03 29 20 29C24.97 29 29 24.97 29 20C29 15.03 24.97 11 20 11ZM25.92 18H23.97C23.65 16.75 23.19 15.55 22.59 14.44C24.03 15.07 25.22 16.36 25.92 18ZM20 13.04C20.83 14.24 21.48 15.57 21.91 18H18.09C18.52 15.57 19.17 14.24 20 13.04ZM13.26 22C13.1 21.36 13 20.69 13 20C13 19.31 13.1 18.64 13.26 18H15.64C15.56 18.66 15.5 19.32 15.5 20C15.5 20.68 15.56 21.34 15.64 22H13.26ZM14.08 24H16.03C16.35 25.25 16.81 26.45 17.41 27.56C15.97 26.93 14.78 25.65 14.08 24ZM16.03 16H14.08C14.78 14.36 15.97 13.07 17.41 12.44C16.81 13.55 16.35 14.75 16.03 16ZM20 26.96C19.17 25.76 18.52 24.43 18.09 22H21.91C21.48 24.43 20.83 25.76 20 26.96ZM22.34 20C22.44 19.34 22.5 18.68 22.5 18H17.5C17.5 18.68 17.56 19.34 17.66 20H22.34ZM22.59 27.56C23.19 26.45 23.65 25.25 23.97 24H25.92C25.22 25.65 24.03 26.93 22.59 27.56ZM24.36 22C24.44 21.34 24.5 20.68 24.5 20C24.5 19.32 24.44 18.66 24.36 18H26.74C26.9 18.64 27 19.31 27 20C27 20.69 26.9 21.36 26.74 22H24.36Z" fill="#4B6BFB" />
    </svg>
);

const HighSuccessIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#EBF0FF" />
        <path d="M27 13H13V27H27V13ZM15 25V18H17V25H15ZM19 25V15H21V25H19ZM23 25V21H25V25H23Z" fill="#4B6BFB" />
    </svg>
);

// Payment method icons
const VisaIcon = () => (
    <svg width="50" height="16" viewBox="0 0 50 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="14" fill="#1A1F71" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="16">VISA</text>
    </svg>
);

const CardIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#4B6BFB" strokeWidth="1.5" />
        <line x1="2" y1="9" x2="22" y2="9" stroke="#4B6BFB" strokeWidth="1.5" />
        <rect x="5" y="13" width="4" height="2" rx="0.5" fill="#4B6BFB" />
    </svg>
);

const partners = [
    {
        name: 'CREGIS',
        logo: '/assets/icons/logo10.svg',
    },
    {
        name: 'PayMe',
        logo: '/assets/icons/logo11.svg',
    },
    {
        name: 'Match2Pay',
        logo: '/assets/icons/logo12.svg',
    },
    {
        name: 'Praxis',
        logo: '/assets/icons/logo13.svg',
    },
    {
        name: 'CoinPayments',
        logo: '/assets/icons/logo8.svg',
    },
    {
        name: 'Stripe',
        logo: '/assets/icons/logo3.svg',
    },
];

const features = [
    {
        icon: <EasyIntegrationIcon />,
        title: 'Easy Integration',
        description: 'Quick API integration with minimal setup',
    },
    {
        icon: <LowFeesIcon />,
        title: 'Low Transaction Fees',
        description: 'Competitive pricing for higher profitability',
    },
    {
        icon: <SecureIcon />,
        title: 'Secure & Compliant',
        description: 'PCI-DSS compliant with advanced fraud protection',
    },
    {
        icon: <GlobalIcon />,
        title: 'Global Coverage',
        description: 'Support for multiple currencies and regions',
    },
    {
        icon: <HighSuccessIcon />,
        title: 'High Success Rate',
        description: 'Optimized processing for forex & high-risk businesses',
    },
];

const paymentMethods = ['Visa', 'Mastercard', 'Bank Transfer', 'Bitcoin', 'Tether', 'Ethereum'];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

export default function PspPartnersDetailsindex() {
    return (
        <div className={styles.pspPartnersDetails}>
            <div className='container'>
                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <div className={styles.buttonCenter}>
                        <CommonButton text="PSP Partners" />
                    </div>
                    <h2>
                        Payment Service Provider <span>(PSP)</span> Integrations
                    </h2>
                    <p>
                        Seamlessly connect your forex brokerage with trusted global payment service providers.
                        At Genxel, we help you integrate secure, fast, and reliable payment solutions to ensure
                        smooth deposits and withdrawals for your clients worldwide.
                    </p>
                </div>

                {/* Partners Section Title */}
                <div className={styles.partnersTitle}>
                    <h3>Our Trusted PSP Partners</h3>
                </div>

                {/* Partners Logo Grid */}
                <motion.div
                    className={styles.partnersGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            className={styles.partnerCard}
                            variants={itemVariants}
                            whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(75, 107, 251, 0.12)' }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className={styles.partnerLogo}>
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Features Section */}
                <motion.div
                    className={styles.featuresGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={styles.featureCard}
                            variants={itemVariants}
                        >
                            <div className={styles.featureIcon}>
                                {feature.icon}
                            </div>
                            <h4>{feature.title}</h4>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Supported Payment Methods */}
                <motion.div
                    className={styles.paymentMethods}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.paymentHeader}>
                        <div className={styles.paymentIcon}>
                            <CardIcon />
                        </div>
                        <h4>Supported Payment Methods</h4>
                    </div>
                    <div className={styles.paymentLogos}>
                        {/* Visa */}
                        <div className={styles.paymentItem}>
                            <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="0" y="16" fill="#1A1F71" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18">VISA</text>
                            </svg>
                        </div>
                        {/* Mastercard */}
                        <div className={styles.paymentItem}>
                            <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="13" cy="12" r="10" fill="#EB001B" />
                                <circle cx="23" cy="12" r="10" fill="#F79E1B" />
                                <path d="M18 4.58C20.4 6.52 22 9.58 22 12C22 14.42 20.4 17.48 18 19.42C15.6 17.48 14 14.42 14 12C14 9.58 15.6 6.52 18 4.58Z" fill="#FF5F00" />
                            </svg>
                        </div>
                        {/* Bank Transfer */}
                        <div className={styles.paymentItem}>
                            <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="34" height="26" rx="3" stroke="#333" strokeWidth="1.5" fill="white" />
                                <text x="5" y="12" fill="#333" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="7">BANK</text>
                                <text x="3" y="22" fill="#333" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="6">TRANSFER</text>
                            </svg>
                        </div>
                        {/* Bitcoin */}
                        <div className={styles.paymentItem}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="14" cy="14" r="14" fill="#F7931A" />
                                <text x="8" y="19" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14">₿</text>
                            </svg>
                        </div>
                        {/* Tether */}
                        <div className={styles.paymentItem}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="14" cy="14" r="14" fill="#26A17B" />
                                <text x="7" y="19" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14">₮</text>
                            </svg>
                        </div>
                        {/* Ethereum */}
                        <div className={styles.paymentItem}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="14" cy="14" r="14" fill="#627EEA" />
                                <path d="M14 4L8 14.5L14 18L20 14.5L14 4Z" fill="white" fillOpacity="0.6" />
                                <path d="M14 4L14 18L20 14.5L14 4Z" fill="white" />
                                <path d="M14 19.5L8 16L14 24L20 16L14 19.5Z" fill="white" fillOpacity="0.6" />
                                <path d="M14 19.5V24L20 16L14 19.5Z" fill="white" />
                            </svg>
                        </div>
                        {/* & More */}
                        <div className={`${styles.paymentItem} ${styles.moreText}`}>
                            <span>& More</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
