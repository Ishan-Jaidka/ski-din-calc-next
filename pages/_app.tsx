import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/App.css'
import '../styles/Disclaimer.css'
import '../styles/PrivacyPolicy.css'
import Adsense from '../lib/components/Adsense'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Adsense />
      <Component {...pageProps} />
    </>
  )
}
