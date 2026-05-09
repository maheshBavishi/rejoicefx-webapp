import MauritiusForexLicenseBanner from './mauritiusForexLicenseBanner'
import CompanyFormation from './companyFormation'
import Process from './process'
import RequirementsSection from './requirementsSection'
import Explicit from './explicit'
import TrustedPartners from './explicit/trustedPartners'
import Overview from './explicit/overview'
import React, { useEffect } from 'react'
import Slidersection from '../home/slidersection'
import EveryoneInformation from './everyoneInformation'
import FAQSection from './faqSection'

export default function MauritiusForexLicense() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <div>
      <MauritiusForexLicenseBanner />
      <Slidersection />
      <CompanyFormation />
      <EveryoneInformation />
      <Process />
      <RequirementsSection />
      {/* <Explicit/> */}
      {/* <TrustedPartners />
      <Overview /> */}
      <FAQSection />
    </div>
  )
}
