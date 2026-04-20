import React from 'react'
import styles from './product.module.scss';
const Image1 = '/assets/images/p1.png';
const Image2 = '/assets/images/p2.png';
const Image3 = '/assets/images/p3.png';
const Image4 = '/assets/images/p4.png';
import CommonButton from '@/components/commonButton';
import Image from 'next/image';
import Link from 'next/link';

const productsData = [
    {
        title: "Forex Broker CRM",
        description: "Complete CRM solution tailored for Forex brokers to manage clients efficiently.",
        redirectLink: "/forex-crm",
        imgSrc: Image1,
    },
    {
        title: "Forex Prop Firm CRM",
        description: "Powerful CRM designed for proprietary trading firms and funded trader programs.",
        redirectLink: "/forex-prop-firm-crm",
        imgSrc: Image2,
    },
    {
        title: "Copy Trading",
        description: "Enable clients to copy expert traders' strategies and grow their portfolios.",
        redirectLink: "/copy-trading-platform",
        imgSrc: Image3,
    },
    {
        title: "MAM/PAMM Social Trading",
        description: "Multi-account management and social trading solutions for fund managers.",
        redirectLink: "/mam-pamm-social-trading",
        imgSrc: Image4,
    },
];

export default function Product() {
    return (
        <div className="container-lg">
            <div className={styles.serviceSectionalignment}>
                <div className="container">
                    <div className={styles.buttonCenteralignment}>
                        <CommonButton text="Products" />
                    </div>
                    <div className={styles.text}>
                        <h2>Products Tailored for Forex Success</h2>
                        <p>
                            Explore our comprehensive suite of Forex products designed to elevate your trading experience.
                        </p>
                    </div>
                    <div className={styles.grid}>
                        {productsData.map((product, index) => (
                            <div className={styles.griditems} key={index}>
                                <Link href={product.redirectLink}>
                                    <button>{`0${index + 1}`}</button>
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                    <div className={styles.img}>
                                        <Image src={product.imgSrc} layout="fill" />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
