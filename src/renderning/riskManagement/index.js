import React from 'react'
import RiskManagementBanner from './riskManagementBanner'
import RiskManagementOffer from './riskManagementOffer'
import Advantages from './advantages'
import Slidersection from '../home/slidersection'

export default function RiskManagement() {
    return (
        <div>
            <RiskManagementBanner />
            <Slidersection />
            <RiskManagementOffer />
            <Advantages />
        </div>
    )
}
