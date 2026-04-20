import React from 'react'
import ForexbrokerSetupBanner from './forexbrokerSetupBanner'
import WhatWeOffer from './whatWeOffer'
import WhyChooseRejoicefx from './whyChooseRejoicefx'
import ForexbrokerSetupHowitWork from './forexbrokerSetupHowitWork'
import Slidersection from '../home/slidersection'

export default function ForexbrokerSetup() {
    return (
        <div>
            <ForexbrokerSetupBanner />
            <Slidersection />
            <WhatWeOffer />
            <WhyChooseRejoicefx />
            <ForexbrokerSetupHowitWork />
        </div>
    )
}
