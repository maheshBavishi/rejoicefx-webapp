import CopyTradingPlatform from '@/renderning/copyTradingPlatform'
import Head from 'next/head'
import React from 'react'

export default function index() {
    return (
        <div>
            <Head>
                <title>Copy Trading Platform | Social Trading Solutions for Forex Brokers | GENXEL</title>
                <meta
                    name="description"
                    content="Offer seamless copy trading solutions with GENXEL. Enable investors to copy expert traders, manage performance, and grow your Forex business with advanced automation."
                />
                <meta
                    name="keywords"
                    content="Copy Trading Platform, Forex Copy Trading, Social Trading Software, MT4 Copy Trading, MT5 Copy Trading, Copy Trading CRM, Forex Technology Solutions"
                />
            </Head>
            <CopyTradingPlatform />
        </div>
    )
}
