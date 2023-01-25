import React from 'react'
import DownloadApp from '../lib/components/Images/DownloadApp'
import Form from '../lib/components/Form'
import Logo from '../lib/components/Images/Logo'
import Disclaimer from '../lib/components//Disclaimer'
import { useState, useEffect } from 'react'
import Head from 'next/head'

function App() {
  //Displays Disclaimer after 3 second delay
  const [buttonDisclaimer, setButtonDisclaimer] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setButtonDisclaimer(true)
    }, 1500)
  }, [])

  return (
    <div className="App">
      <Head>
        <link rel="icon" href="%PUBLIC_URL%/images/chair2.png" />
        <meta property="og:title" content="Ski DIN Calculator" />
        <meta
          name="description"
          property="og:description"
          content="An educational tool to calculate the DIN (release tension) of your Ski bindings using the 2017 Marker DIN chart."
        />
        <meta name="image" property="og:image" content="%PUBLIC_URL%/images/chair2.png" />
        <meta name="twitter:title" content="Ski DIN Calculator" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="%PUBLIC_URL%/images/chair2.png" />
      </Head>
      <header className="App-header">
        <label>Ski Din Calculator</label>
        <Logo />
      </header>
      <Disclaimer trigger={buttonDisclaimer} setTrigger={setButtonDisclaimer}></Disclaimer>
      <Form />
      <DownloadApp />
    </div>
  )
}

export default App
