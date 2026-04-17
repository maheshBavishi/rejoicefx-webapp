import React from 'react'
import styles from './ourIntegration.module.scss';
import { motion } from 'framer-motion';

const OurIntegrationImage = '/assets/images/OurIntegration.png';

export default function OurIntegration() {
    return (
        <div className={styles.ourIntegration}>
            <div className='container'>
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Our Integration
                </motion.h2>
                <div className={styles.imageWrapper}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    >
                        <motion.img
                            src={OurIntegrationImage}
                            alt="OurIntegrationImage"
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
