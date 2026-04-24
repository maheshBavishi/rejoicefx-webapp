import React from 'react'
import AboutUsBanner from './aboutUsBanner'
import Aboutus from '../home/aboutus'
import OurIntegration from '../home/ourIntegration'
import Slidersection from '../home/slidersection'
import Whychoose from '../home/whyChoose'

export default function AboutUsPage() {
    return (
        <div>
            <AboutUsBanner />
            <Slidersection />
            <Aboutus />
            <OurIntegration />
            <Whychoose />
        </div>
    )
}
