import React from 'react'
import ForexCrmCaseStudyBanner from './forexCrmCaseStudyBanner'
import ClientProfile from './clientProfile'
import TheChallenge from './theChallenge'
import OurSolution from './ourSolution'
import DevelopmentProcess from './developmentProcess'
import ResultsAchieved from './resultsAchieved'
import KeyFeatures from './keyFeatures'
import ClientTestimonials from './clientTestimonials'
import TechStack from './techStack'
import ProjectImpact from './projectImpact'

export default function ForexCrmCaseStudy() {
    return (
        <div>
            <ForexCrmCaseStudyBanner />
            <ClientProfile />
            <TheChallenge />
            <OurSolution />
            <DevelopmentProcess />
            <ResultsAchieved />
            <KeyFeatures />
            <ClientTestimonials />
            <TechStack />
            <ProjectImpact />
        </div>
    )
}
