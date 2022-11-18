import React from 'react'
import Script from 'next/script'

function Adsense() {
  return (
    <Script
      id="Adsense-id"
      data-ad-client="ca-pub-9008088250860232"
      async
      strategy="afterInteractive"
      onError={(e) => {
        console.error('Script failed to load', e)
      }}
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    />
  )
}

export default Adsense
