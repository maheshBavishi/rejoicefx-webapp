import React from 'react'
import SetupTrainingBanner from './setupTrainingBanner'
import SetupTrainingWhatWeOffer from './setupTrainingWhatWeOffer'
import WhyChooseSetupTraining from './whyChooseSetupTraining'
import SetupTrainingHowItWork from './setupTrainingHowItWork'
import Slidersection from '../home/slidersection'

export default function SetupTraining() {
    return (
        <div>
            <SetupTrainingBanner />
            <Slidersection />
            <SetupTrainingWhatWeOffer />
            <WhyChooseSetupTraining />
        </div>
    )
}
