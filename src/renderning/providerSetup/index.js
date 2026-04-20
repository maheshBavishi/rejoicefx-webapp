import React from 'react'
import ProviderSetupBanner from './providerSetupBanner'
import LiquidityProviders from './liquidityProviders'
import ServicesIncluded from './servicesIncluded'
import ProviderSetupWhychoose from './providerSetupWhychoose'
import Slidersection from '../home/slidersection'

export default function ProviderSetup() {
    return (
        <div>
            <ProviderSetupBanner />
            <Slidersection />
            <LiquidityProviders />
            <ServicesIncluded />
            <ProviderSetupWhychoose />
        </div>
    )
}
