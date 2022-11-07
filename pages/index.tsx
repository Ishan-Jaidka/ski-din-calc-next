import React from 'react'
import DownloadApp from '../components/Images/DownloadApp'
import Form from '../components/Form'
import Logo from '../components/Images/Logo'
import Disclaimer from '../components//Disclaimer'
import { useState, useEffect } from 'react'

//TODO:
/*
  replace class components with functional components in like form.js
  FLEXBOX FROGGY
  redesign using flexbox
  - hint: flexboxes can be nested and are very easy to debug with dev tools
*/
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
