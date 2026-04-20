import React from 'react'
import VincentforexLicenseBanner from './vincentforexLicenseBanner'
import FormationSection from './formationSection'
import VincentforexLicenseProcess from './vincentforexLicenseProcess'
import Explicit from '../mauritiusForexLicense/explicit'
import TrustedPartners from '../mauritiusForexLicense/explicit/trustedPartners'
import Overview from '../mauritiusForexLicense/explicit/overview'
import RequirementsSectionSt from './RequirementsSectionSt'
import VincentOverview from './vincentOverview'
import Slidersection from '../home/slidersection'

export default function VincentforexLicense() {
  return (
    <div>
      <VincentforexLicenseBanner />
      <Slidersection />
      <FormationSection />
      <VincentforexLicenseProcess />
      <RequirementsSectionSt />
      <Explicit />
      <TrustedPartners />
      <VincentOverview />
    </div>
  )
}
