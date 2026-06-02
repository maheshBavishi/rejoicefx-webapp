import React from 'react'
import Hero from './hero'
import AboutSection from './aboutSection'
import FeatureSection from './featureSection'
import WhychooseUs from './whychooseUs'
import Platforms from './platforms'
import BenefitsUi from './BenefitsUi'
import FaqSection from './faqSection'

export default function MobileAppDevelopment() {
    return (
        <div>
            <Hero />
            <AboutSection />
            <FeatureSection />
            <WhychooseUs />
            {/* <Platforms /> */}
            <BenefitsUi />
            <FaqSection />
        </div>
    )
}
