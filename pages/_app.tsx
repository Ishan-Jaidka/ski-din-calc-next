import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/App.css'
import '../styles/Disclaimer.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
