import React from 'react'
import styles from './service.module.scss';
const Image1 = '/assets/images/img1.png';
const Image2 = '/assets/images/img2.png';
const Image3 = '/assets/images/img3.png';
const Image4 = '/assets/images/service.png';
const LiquidityImage = '/assets/images/Liquidity.png';
const AiMlImage = '/assets/images/ai-ml.png';
const Image5 = '/assets/images/algo.png';
import CommonButton from '@/components/commonButton';
import Image from 'next/image';
import Link from 'next/link';
import Atropos from 'atropos/react';

const servicesData = [
  {
    title: "Forex Broker Setup",
    description: "End-to-end Forex broker setup services to launch your brokerage swiftly.",
    redirectLink: "/forex-broker-setup",
    imgSrc: Image1,
  },
  {
    title: "MT4/MT5 Setup & Training",
    description: "Professional MetaTrader 4 & 5 configuration, deployment, and staff training.",
    redirectLink: "/mt4-mt5-setup-training",
    imgSrc: Image2,
  },
  {
    title: "RMS",
    description: "Risk Management System to monitor and control trading exposure in real-time.",
    redirectLink: "/rms-risk-management",
    imgSrc: Image3,
  },
  {
    title: "Liquidity Provider's Setup",
    description: "Connect to top-tier liquidity providers for the best spreads and execution.",
    redirectLink: "/liquidity-provider-setup",
    imgSrc: LiquidityImage,
  },
  {
    title: "AI/ML Services",
    description: "Cutting-edge artificial intelligence and machine learning solutions for trading.",
    redirectLink: "/ai-development",
    imgSrc: AiMlImage,
  },
];

export default function Service() {
  return (
    <div className="container-lg">
      <div className={styles.serviceSectionalignment}>
        <div className="container">
          <div className={styles.buttonCenteralignment}>
            <CommonButton text="Services" />
          </div>
          <div className={styles.text}>
            <h2>Services Tailored for Forex Success</h2>
            <p>
              Unlock comprehensive solutions to enhance your Forex brokerage with cutting-edge technology
              and expert support.
            </p>
          </div>
          <div className={styles.grid}>
            {servicesData.map((service, index) => (

              <div className={styles.griditems}>
                <Link href={service.redirectLink}>
                  <button>{`0${index + 1}`}</button>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className={styles.img}>
                    <Image src={service.imgSrc} layout="fill" />
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
