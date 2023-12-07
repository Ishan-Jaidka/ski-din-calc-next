import React from 'react'
import DownloadApp from '../lib/components/Images/DownloadApp'
import Logo from '../lib/components/Images/Logo'
import Head from 'next/head'

function App() {
  return (
    <div className="App">
      <Head>
        <link rel="icon" href="https://ski-din-calculator.vercel.app/images/chair2.png" />
        <meta property="og:title" content="Ski DIN Calculator" />
        <title>Ski DIN Calculator</title>
        <meta
          name="description"
          property="og:description"
          content="An educational tool to calculate the DIN (release tension) of your Ski bindings using the 2017 Marker DIN chart."
        />
        <meta name="image" property="og:image" content="https://ski-din-calculator.vercel.app/images/chair2.png" />
        <meta name="twitter:title" content="Ski DIN Calculator" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://ski-din-calculator.vercel.app/images/chair2.png" />
      </Head>
      <header className="App-header">
        <label>Privacy Policy</label>
        <Logo />
      </header>
      <div>We don't collect any user data. We don't keep any information you provide on the website or the app.</div>
      <DownloadApp />
    </div>
  )
}

export default App
