import '../styles/globals.css'
import '../styles/App.css'
import '../styles/Disclaimer.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
