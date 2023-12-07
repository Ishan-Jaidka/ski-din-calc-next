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
      <div className="Privacy-Policy">
        Welcome to <b>Ski DIN Calculator</b>. We are committed to respecting the privacy of all visitors/users of our
        website and app.
        <br />
        <br />
        <br />
        This Privacy Policy outlines our practices regarding the collection, use, and disclosure of information.
        <br />
        <br />
        <br />
        <br />
        <b>Information We Do Not Collect</b>
        <br />
        <br />
        We do not collect any personal data or information from our users. This includes, but is not limited to, names,
        email addresses, phone numbers, location data, IP addresses, or any other form of personally identifiable
        information.
        <br />
        <br />
        <br />
        <br />
        <b>No Data Storage</b>
        <br />
        <br />
        Our website and app do not store any user data. We operate on a strictly "no data" basis, meaning that all
        interactions within the website or app are not saved, tracked, or analyzed.
        <br />
        <br />
        <br />
        <br />
        <b>Third-Party Links</b>
        <br />
        <br />
        Our website/app may contain links to third-party websites or applications. Please be aware that we are not
        responsible for the privacy practices of such other sites. We encourage our users to be aware when they leave
        our site and to read the privacy statements of any other site that collects personally identifiable information.
        <br />
        <br />
        <br />
        <br />
        <b>Security Measures</b>
        <br />
        <br />
        Although we do not collect or store any data, we still maintain high standards of digital security to prevent
        unauthorized access to our website/app infrastructure.
        <br />
        <br />
        <br />
        <br />
      </div>
      <DownloadApp />
    </div>
  )
}

export default App
