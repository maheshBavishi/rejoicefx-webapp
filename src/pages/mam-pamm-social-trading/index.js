import MamPammSocial from '@/renderning/mamPammSocial'
import Head from 'next/head'
import React from 'react'

export default function index() {
    return (
        <div>
            <Head>
                <title>MAM/PAMM Social Trading Solutions | Multi-Account Management Platform | GENXEL</title>
                <meta
                    name="description"
                    content="Manage multiple trading accounts efficiently with GENXEL MAM/PAMM solutions. Offer professional fund management, automated allocations, and scalable trading infrastructure."
                />
                <meta
                    name="keywords"
                    content="MAM PAMM Software, Forex MAM Solution, PAMM Account Management, Multi Account Manager MT4 MT5, Social Trading Platform, Forex Fund Management Software"
                />
            </Head>
            <MamPammSocial />
        </div>
    )
}
