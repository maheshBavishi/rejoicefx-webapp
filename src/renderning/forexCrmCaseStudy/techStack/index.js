import React from 'react';
import styles from './techStack.module.scss';
import CommonButton from '@/components/commonButton';

const techCategories = [
    {
        name: 'Frontend',
        items: ['Angular', 'React', 'TypeScript'],
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
        ),
    },
    {
        name: 'Backend',
        items: ['Node.js', 'Laravel', 'REST APIs'],
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm-2 5h-2v-2h2v2zm0-9H4c-.55 0-1 .45-1 1v.1L12 15l9-4.9V10c0-.55-.45-1-1-1zm-2 3h-2V10h2v2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-2 5h-2V6h2v2z" />
            </svg>
        ),
    },
    {
        name: 'Database',
        items: ['PostgreSQL', 'MySQL'],
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm-2 5h-2v-2h2v2zM4 3h16c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1zm14 5h-2V6h2v2z" />
            </svg>
        ),
    },
    {
        name: 'Cloud',
        items: ['AWS', 'Docker', 'CI/CD'],
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
        ),
    },
    {
        name: 'Trading',
        items: ['MetaTrader 4 (MT4)', 'MetaTrader 5 (MT5)'],
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
            </svg>
        ),
    },
];

export default function TechStack() {
    return (
        <div className="container-lg">
            <div className={styles.techStackSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <CommonButton text="Built With" />
                        </div>
                        <h2>Technology Stack</h2>
                        <p>
                            Enterprise-grade technologies chosen for scalability, performance, and long-term reliability.
                        </p>
                    </div>
                    <div className={styles.techCategoriesGrid}>
                        {techCategories.map((cat, idx) => (
                            <div className={styles.techCategory} key={idx}>
                                <div className={styles.categoryIcon}>{cat.icon}</div>
                                <span className={styles.categoryName}>{cat.name}</span>
                                <div className={styles.techItems}>
                                    {cat.items.map((item, i) => (
                                        <div className={styles.techItem} key={i}>{item}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
