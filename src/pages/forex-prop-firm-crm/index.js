import Head from 'next/head'
import ForexPropfirmCrm from '@/renderning/ForexPropfirmCrm'
import React from 'react'

export default function index() {
    return (
        <>
            <Head>
                <title>Forex Prop Firm CRM Solutions | Manage & Scale Your Prop Trading Firm | GENXEL</title>
                <meta
                    name="description"
                    content="Launch and scale your proprietary trading firm with GENXEL Prop Firm CRM. Manage traders, challenges, payouts, risk, and analytics with an all-in-one automated solution."
                />
                <meta
                    name="keywords"
                    content="Forex Prop Firm CRM, Prop Trading CRM, Forex CRM Software, Prop Firm Software, Trading Challenge System, MT5 CRM Integration, Prop Firm Dashboard, Forex Technology Solutions"
                />
            </Head>
            <ForexPropfirmCrm />
        </>
    )
}
