import React, { Component } from 'react'
import Image from 'next/image'
import androidDude from '../../../public/images/android-download.png'

class DownloadApp extends Component {
  render() {
    return (
      <div className="App-download">
        <a
          href="https://play.google.com/store/apps/details?id=com.ski.dincalc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="App-download-image" src={androidDude} alt="Android App" />
        </a>
      </div>
    )
  }
}

export default DownloadApp
