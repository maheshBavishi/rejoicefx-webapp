import React from 'react'
import PowergenTradingPlatformHero from './powergenTradingPlatformHero'
import AboutSection from './aboutSection'
import WhyChoosePowergen from './whyChoosePowergen'
import TradingEcosystem from './tradingEcosystem'
import Mt5Integration from './mt5Integration'
import WhyGenxel from './whyGenxel'
import BenefitsSection from './benefitsSection'
import FaqSection from './faqSection'

export default function PowergenTradingPlatform() {
    return (
        <div>
            <PowergenTradingPlatformHero />
            <AboutSection />
            <WhyChoosePowergen />
            <TradingEcosystem />
            <Mt5Integration />
            <WhyGenxel />
            <BenefitsSection />
            <FaqSection />
        </div>
    )
}
