import RiskManagement from '@/renderning/riskManagement'
import Head from 'next/head'

export default function index() {
  return (
    <div>
      <Head>
        <title>Forex Risk Management System (RMS) | Maximize Profit & Control Risk | GENXEL</title>
        <meta
          name="description"
          content="Advanced Forex RMS solutions by GENXEL. Monitor risk, manage exposure, and optimize profits with real-time analytics and expert support."
        />
      </Head>
      <RiskManagement />
    </div>
  )
}
