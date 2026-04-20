import SetupTraining from '@/renderning/setupTraining'
import Head from 'next/head'
import React from 'react'

export default function index() {
    return (
        <div>
            <Head>
                <title>MT4 / MT5 Setup & Training Services | Forex Platform Experts | RejoiceFX</title>
                <meta
                    name="description"
                    content="Get complete MT4 and MT5 setup, configuration, and training with 24/7 support. RejoiceFX provides expert MetaTrader solutions for brokers and traders."
                />
            </Head>
            <SetupTraining />
        </div>
    )
}
