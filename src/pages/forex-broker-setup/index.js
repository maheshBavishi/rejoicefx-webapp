import ForexbrokerSetup from '@/renderning/forexbrokerSetup'
import Head from 'next/head'
import React from 'react'

export default function index() {
  return (
    <div>
      <Head>
        <title>Start Your Forex Brokerage | End-to-End Forex Broker Setup | RejoiceFX</title>
        <meta
          name="description"
          content="Launch your Forex brokerage with RejoiceFX. We provide complete broker setup including licensing, CRM, MT4/MT5, liquidity, and risk management solutions."
        />
        <meta
          name="keywords"
          content="Copy Trading Platform, Forex Copy Trading, Social Trading Software, MT4 Copy Trading, MT5 Copy Trading, Copy Trading CRM, Forex Technology Solutions"
        />
      </Head>
      <ForexbrokerSetup />
    </div>
  )
}
