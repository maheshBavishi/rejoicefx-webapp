import ProviderSetup from '@/renderning/providerSetup'
import Head from 'next/head'
import React from 'react'

export default function index() {
    return (
        <div>
            <Head>
                <title>Liquidity Provider Setup | Forex Liquidity Solutions | RejoiceFX</title>
                <meta
                    name="description"
                    content="Connect with top liquidity providers like Finalto, LMAX, and more. RejoiceFX offers seamless liquidity setup for Forex brokers."
                />
            </Head>
            <ProviderSetup />
        </div>
    )
}
