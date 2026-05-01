import React, { useState } from "react";
import styles from "./mobileHeader.module.scss";
import Link from "next/link";
import Image from "next/image";
import DownArrow from "../icons/downArrow";
import classNames from "classnames";

const Logo = "/assets/logo/logo.svg";

const menuItems = [
  {
    title: "Products",
    submenu: [
      {
        title: "Forex Broker CRM",
        redirectLink: "/forex-crm",
      },
      {
        title: "Forex Prop Firm CRM",
        redirectLink: "/forex-prop-firm-crm",
      },
      {
        title: "Copy Trading",
        redirectLink: "/copy-trading-platform",
      },
      {
        title: "MAM/PAMM Social Trading",
        redirectLink: "/mam-pamm-social-trading",
      },
    ],
  },
  {
    title: "Corporate Services",
    submenu: [
      {
        title: "Forex Broker Setup",
        redirectLink: "/forex-broker-setup",
      },
      {
        title: "MT4/MT5 Setup & Training",
        redirectLink: "/mt4-mt5-setup-training",
      },
      {
        title: "RMS",
        redirectLink: "/rms-risk-management",
      },
      {
        title: "Liquidity Provider's Setup",
        redirectLink: "/liquidity-provider-setup",
      },
      {
        title: "AI/ML Services",
        redirectLink: "/ai-development",
      },
      {
        title: "AI bot development",
        redirectLink: "/algo-bot",
      },

    ],
  },
  {
    title: "Company",
    submenu: [
      {
        title: "About Us",
        redirectLink: "/about-us",
      },
    ],
  },
  {
    title: "Resources",
    submenu: [
      {
        title: "News",
        redirectLink: "/news",
      },
      {
        title: "Case Studies",
        redirectLink: "/",
      },
    ],
  },
];

export default function MobileHeader({ setHeader, header }) {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <div className={classNames(styles.mobileHeader, header ? styles.show : styles.hide)}>
      <div className={styles.subheaderStyle}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={Logo} layout="fill" alt="Genxel Logo" />
          </Link>
        </div>
        <svg onClick={() => setHeader(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={styles.closeIcon}>
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </div>
      <div className={styles.mobileBodyStyle}>
        {menuItems.map((item, index) => (
          <div className={styles.border} key={index}>
            <div className={styles.mobileMenu} onClick={() => toggleSubmenu(index)}>
              <a>{item.title}</a>
              {item.submenu && (
                <div className={classNames(styles.animation, activeSubmenu === index ? styles.rotate : "")}>
                  <DownArrow />
                </div>
              )}
            </div>
            {item.submenu && (
              <div className={classNames(styles.mobileHeaderSubmenu, activeSubmenu === index ? styles.show : styles.hide)}>
                <div className={styles.spacer}>
                  {item.submenu.map((subItem, subIndex) => (
                    <div key={subIndex} className={styles.subItemWrapper}>
                      <Link onClick={() => setHeader(false)} href={subItem.redirectLink}>
                        <div className={styles.subItemTitle}>{subItem.title}</div>
                        <div className={styles.subItemDescription}>{subItem.description}</div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <div className={styles.border}>
          <div className={styles.mobileMenu}>
            <Link onClick={() => setHeader(false)} href="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

