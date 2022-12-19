import React from 'react'
import DownloadApp from '../lib/components/Images/DownloadApp'
import Form from '../lib/components/Form'
import Logo from '../lib/components/Images/Logo'
import Disclaimer from '../lib/components//Disclaimer'
import { useState, useEffect } from 'react'

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
