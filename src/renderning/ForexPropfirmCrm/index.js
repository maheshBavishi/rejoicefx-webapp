import React from 'react'
import styles from './ForexPropfirmCrm.module.scss';
import ForexPropfirmCrmHerobanner from './forexPropfirmCrmHerobanner';
import KeyFeatures from './keyFeatures';
import Advantages from './advantages';
import WhyChooseRejoicefx from './whyChooseRejoicefx';
import WhoIsThis from './whoIsThis';
import HowitWorkCrm from './howitWorkCrm';
import Integrations from './integrations';
import FaqSectionCrm from './faqCrm';
import Slidersection from '../home/slidersection';
export default function ForexPropfirmCrm() {
  return (
    <div>
      <ForexPropfirmCrmHerobanner />
      <Slidersection />
      <KeyFeatures />
      <Advantages />
      <WhyChooseRejoicefx />
      <WhoIsThis />
      <HowitWorkCrm />
      <Integrations />
      <FaqSectionCrm />
    </div>
  )
}
