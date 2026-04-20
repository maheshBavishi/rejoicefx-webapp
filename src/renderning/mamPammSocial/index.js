import React from 'react'
import MamPammSocialHerobanner from './mamPammSocialHerobanner'
import MamPammSocialKeyFeatures from './mamPammSocialKeyFeatures'
import MamPammSocialAdvantages from './mamPammSocialAdvantages'
import MamPammSocialWhyChoose from './mamPammSocialWhyChoose'
import MamPammSocialWhoIsThis from './mamPammSocialWhoIsThis'
import MamPammSocialHowitWork from './mamPammSocialHowitWork'
import MamPammSocialIntegrations from './mamPammSocialIntegrations'
import MamPammSocialFaq from './mamPammSocialFaq'
import Slidersection from '../home/slidersection'

export default function MamPammSocial() {
    return (
        <div>
            <MamPammSocialHerobanner />
            <Slidersection />
            <MamPammSocialKeyFeatures />
            <MamPammSocialAdvantages />
            <MamPammSocialWhyChoose />
            <MamPammSocialWhoIsThis />
            <MamPammSocialHowitWork />
            <MamPammSocialIntegrations />
            <MamPammSocialFaq />
        </div>
    )
}
