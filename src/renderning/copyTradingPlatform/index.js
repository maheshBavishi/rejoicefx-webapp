import React from 'react'
import CopyTradingPlatformHero from './copyTradingPlatformHero'
import CopyTradingKeyfeature from './copyTradingKeyfeature'
import CopyTradingAdvantages from './copyTradingAdvantages'
import CopyTradingWhyChoose from './copyTradingwhyChoose'
import CopyTradingWho from './copyTradingwho'
import CopyTradingHowitWork from './copyTradingHowitWork'
import Integrations from '../ForexPropfirmCrm/integrations'
import CopyTradingFaq from './copyTradingFaq'
import Slidersection from '../home/slidersection'

export default function CopyTradingPlatform() {
    return (
        <div>
            <CopyTradingPlatformHero />
            <Slidersection />
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
