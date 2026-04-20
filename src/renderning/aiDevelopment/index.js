import React from 'react'
import AiDevelopmentBanner from './aiDevelopmentBanner'
import AiDetails from './aiDetails'
import TransformSection from './transformSection'
import SolutionSection from './solutionSection'
import BoostBusiness from './boostBusiness'
import WorkProcess from './workProcess'
import WhatisDevelopment from './whatisDevelopment'
import Slidersection from '../home/slidersection'

export default function AiDevelopment() {
  return (
    <div>
      <AiDevelopmentBanner />
      <Slidersection />
      <TransformSection />
      <SolutionSection />
      <BoostBusiness />
      <WorkProcess />
      <WhatisDevelopment />
    </div>
  )
}
