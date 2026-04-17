import React from 'react'
import styles from './slidersection.module.scss';
import { motion } from 'framer-motion';

const Image1 = '/assets/images/1.webp'
const Image2 = '/assets/images/2.webp'
const Image3 = '/assets/images/3.png'
const Image4 = '/assets/images/4.png'
const Image5 = '/assets/images/5.svg'
const Image6 = '/assets/images/6.png'

export default function Slidersection() {
    const images = [Image1, Image2, Image3, Image4, Image5, Image6];
    // Duplicate images multiple times to ensure the track is long enough for the loop
    const marqueeImages = [...images, ...images, ...images, ...images];

    return (
        <div className={styles.slidersection}>
            <div className='container'>
                <h2>
                    Trusted By Leading Financial Institutions
                </h2>
                <div className={styles.sliderwrapper}>
                    <motion.div
                        className={styles.marqueeTrack}
                        animate={{
                            x: [0, "-50%"]
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                    >
                        {marqueeImages.map((img, index) => (
                            <img key={index} src={img} alt={`brand-${index}`} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
