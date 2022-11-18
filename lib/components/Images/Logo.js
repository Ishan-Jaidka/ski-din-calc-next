import React, { Component } from 'react'
import skiLift from '../../../public/images/chair2.png'
import Image from 'next/image'

class Logo extends Component {
  render() {
    return <Image src={skiLift} className="App-logo" alt="logo" />
  }
}

export default Logo
