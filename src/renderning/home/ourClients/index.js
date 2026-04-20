import React, { useRef } from 'react';
import styles from './ourClients.module.scss';
import CommonButton from '@/components/commonButton';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StarIcon = () => (
    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFB800" />
    </svg>
);

const QuoteIcon = () => (
    <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.28 3V11.233C12.28 17.581 8.125 21.884 2.28 23.04L1.171 20.645C4.646 19.972 7.168 17.258 7.355 13.33H1.28V3H12.28ZM27.882 3V11.233C27.882 17.581 23.71 21.884 17.882 23.04L16.773 20.645C20.246 19.972 22.77 17.258 22.956 13.33H16.882V3H27.882Z" fill="#1C64F2" />
    </svg>
);

const UserIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="12" fill="#EBF5FF" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12ZM12 13.5C9.332 13.5 4 14.836 4 17.5V18H20V17.5C20 14.836 14.668 13.5 12 13.5Z" fill="#1C64F2" />
    </svg>
);

const LeftArrow = () => (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8337 10H4.16699M4.16699 10L10.0003 15.8333M4.16699 10L10.0003 4.16667" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const RightArrow = () => (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.16699 10H15.8337M15.8337 10L10.0003 4.16667M15.8337 10L10.0003 15.8333" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const testimonials = [
    {
        text: "RejoiceFX helped us streamline our brokerage setup much faster than expected. From CRM to trading infrastructure, everything was handled efficiently. The biggest advantage was having all systems integrated in one place.",
        author: "Team, Foreaxa"
    },
    {
        text: "We significantly improved our client management and internal workflows after implementing RejoiceFX. Their CRM and automation tools brought structure and efficiency to our operations.",
        author: "Operations Team, Juno Markets"
    },
    {
        text: "Before RejoiceFX, managing multiple systems was a challenge. Now everything is centralized, making it easier for our team to operate and scale without technical bottlenecks.",
        author: "Management Team, IncredFX"
    },
    {
        text: "Setting up and managing a trading infrastructure used to be complex. RejoiceFX simplified the entire process and gave us the flexibility to customize based on our needs.",
        author: "Technical Team, ExoraPrime"
    },
    {
        text: "The all-in-one ecosystem provided by RejoiceFX helped us reduce operational overhead. From backend systems to automation, everything works seamlessly together.",
        author: "Operations Team, Auxilium FX"
    }
];

export default function OurClients() {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={styles.ourClientsAlignment}>
            <div className='container'>
                <div className={styles.buttonCenteralignment}>
                    <CommonButton text="Our Clients" />
                </div>
                <div className={styles.text}>
                    <h2>What Our Clients Say</h2>
                    <p>
                        Hear from forex brokers, prop firms, and trading businesses using RejoiceFX to scale faster and operate smarter.
                    </p>
                </div>

                <div className={styles.sliderWrapper}>
                    <Slider ref={sliderRef} {...settings}>
                        {testimonials.map((item, index) => (
                            <div key={index} className={styles.slideItemWrapper}>
                                <div className={styles.card}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.stars}>
                                            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                                        </div>
                                        <div className={styles.quote}>
                                            <QuoteIcon />
                                        </div>
                                    </div>
                                    <div className={styles.cardBody}>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className={styles.divider}></div>
                                    <div className={styles.cardFooter}>
                                        <UserIcon />
                                        <span>{item.author}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    <div className={styles.sliderArrows}>
                        <button
                            className={styles.arrowBtn}
                            onClick={() => sliderRef.current?.slickPrev()}
                            aria-label="Previous"
                        >
                            <LeftArrow />
                        </button>
                        <button
                            className={styles.arrowBtn}
                            onClick={() => sliderRef.current?.slickNext()}
                            aria-label="Next"
                        >
                            <RightArrow />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
