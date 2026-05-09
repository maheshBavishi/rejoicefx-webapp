import React from 'react';
import styles from './everyoneInformation.module.scss';
import {
    Globe,
    PiggyBank,
    Coins,
    Timer,
    Scale,
    MapPin,
    CheckCircle2
} from 'lucide-react';

export default function EveryoneInformation() {
    const reasons = [
        {
            id: 1,
            title: "Global Recognition",
            icon: <Globe size={24} />,
            points: [
                "FSC-regulated jurisdiction",
                "Strong international reputation",
                "Trusted by global brokers and investors"
            ]
        },
        {
            id: 2,
            title: "Tax Efficiency",
            icon: <PiggyBank size={24} />,
            points: [
                "Low corporate tax structure",
                "No capital gains tax",
                "Attractive double tax treaties"
            ]
        },
        {
            id: 3,
            title: "Cost-Effective Setup",
            icon: <Coins size={24} />,
            points: [
                "Lower setup cost than EU licenses",
                "High value for Tier-1 offshore licensing",
                "Reduced operational expenses"
            ]
        },
        {
            id: 4,
            title: "Fast & Structured Process",
            icon: <Timer size={24} />,
            points: [
                "License approval within 2-3 months",
                "Clear regulatory framework",
                "Smooth documentation process"
            ]
        },
        {
            id: 5,
            title: "Strong Legal Framework",
            icon: <Scale size={24} />,
            points: [
                "Based on English common law",
                "Transparent compliance system",
                "Secure investor protection policies"
            ]
        },
        {
            id: 6,
            title: "Strategic Global Location",
            icon: <MapPin size={24} />,
            points: [
                "Gateway to Africa, Europe & Asia",
                "Stable economy and political environment",
                "Strong banking and financial infrastructure"
            ]
        }
    ];

    return (
        <section className={styles.everyoneInformationAlignment}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <span>WHY CHOOSE MAURITIUS</span>
                    <h2>Why Everyone Chooses Mauritius for Forex Licensing</h2>
                    <p>
                        Mauritius is one of the most trusted and globally recognized jurisdictions for forex brokers,
                        offering a perfect balance of regulation, tax benefits, and international credibility.
                    </p>
                </div>

                <div className={styles.grid}>
                    {reasons.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <div className={styles.iconBox}>
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <ul>
                                {item.points.map((point, index) => (
                                    <li key={index}>
                                        <CheckCircle2 size={16} className={styles.checkIcon} />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
