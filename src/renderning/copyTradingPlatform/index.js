import React from 'react'
import CopyTradingPlatformHero from './copyTradingPlatformHero'
import CopyTradingKeyfeature from './copyTradingKeyfeature'
import CopyTradingAdvantages from './copyTradingAdvantages'
import CopyTradingWhyChoose from './copyTradingwhyChoose'
import CopyTradingWho from './copyTradingwho'
import CopyTradingHowitWork from './copyTradingHowitWork'
import Integrations from '../ForexPropfirmCrm/integrations'
import CopyTradingFaq from './copyTradingFaq'

export default function CopyTradingPlatform() {
    return (
        <div>
            <CopyTradingPlatformHero />
            <CopyTradingKeyfeature />
            <CopyTradingAdvantages />
            <CopyTradingWhyChoose />
            <CopyTradingWho />
            <CopyTradingHowitWork />
            <Integrations />
            <CopyTradingFaq />
        </div>
    )
}
