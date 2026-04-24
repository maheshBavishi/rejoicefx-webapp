import React, { useEffect, useState } from "react";
import styles from "./news.module.scss";
import CommonButton from "@/components/commonButton";
import Button from "@/components/button";
import Right from "@/components/icons/right";
import {
  Play,
  ArrowRight,
  Globe,
  BarChart3,
  Clock,
  History,
  Zap,
} from "lucide-react";

const featureCards = [
  {
    title: "Real-Time Events",
    description: "Track major global economic events as they happen.",
    icon: <Zap />
  },
  {
    title: "Global Coverage",
    description: "Stay informed on events from the US, EU, UK, Asia & more.",
    icon: <Globe />
  },
  {
    title: "Impact Indicators",
    description: "Quickly identify high, medium, and low impact events.",
    icon: <BarChart3 />
  },
  {
    title: "Accurate Timing",
    description: "Get precise event times in your local timezone.",
    icon: <Clock />
  },
  {
    title: "Historical & Forecasts",
    description: "Compare past data with forecasts and actual results.",
    icon: <History />
  }
];

// Feature cards and other constants remain unchanged

export default function NewsPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });

    // Load TradingView Widget script
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "colorTheme": "light",
      "isWidescreen": true,
      "displayMode": "regular",
      "width": "100%",
      "height": "600",
      "locale": "en",
      "importanceFilter": "-1,0,1",
      "currencyFilter": "USD,EUR,GBP,JPY,CAD,AUD,CHF",
      "isTransparent": true
    });

    const container = document.getElementById("tradingview-widget-container");
    if (container) {
      container.innerHTML = ""; // Clear previous content
      container.appendChild(script);
    }
  }, []);

  return (
    <div className={styles.newsPage}>

      {/* Hero Section */}
      <div className="container-lg">
        <section className={styles.heroSection}>
          <div className={styles.buttonCenteralignment}>
            <CommonButton text="Economic Calendar" />
          </div>
          <h1>
            Economic Calendar
          </h1>
          <p className={styles.description}>
            Stay ahead of the markets with real-time insights into the events that move prices.
            Our economic calendar keeps you updated on key financial events, macroeconomic indicators,
            and global announcements that directly impact forex, crypto, indices, and commodities trading.
          </p>

        </section>
      </div>

      {/* Feature Cards Section */}
      <div className="container">
        <section className={styles.cardsSection}>
          <div className={styles.grid}>
            {featureCards.map((card, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.iconWrapper}>
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Economic Calendar Widget Section */}
        <section className={styles.tableSection}>
          <div className={styles.tableHeader}>
            <div className={styles.filters}>
              <h2 style={{ color: '#0b0b14', fontSize: '24px', fontWeight: '600' }}>Live Market Events</h2>
            </div>
            <div className={styles.timezone}>
              Real-Time Data Feed
            </div>
          </div>

          <div className={styles.tableWrapper} style={{ minHeight: '600px' }}>
            <div id="tradingview-widget-container" className="tradingview-widget-container">
              <div className="tradingview-widget-container__widget"></div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
