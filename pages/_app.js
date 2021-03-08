import Head from 'next/head'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="urcode" />
          <meta name="apple-mobile-web-app-title" content="urcode" />
          <meta name="theme-color" content="#000000" />
          <meta name="msapplication-navbutton-color" content="#000000" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="msapplication-starturl" content="https://urcode.link/" />

          <meta charset='utf-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
          <meta name='description' content='Description' />
          <meta name='keywords' content='Keywords' />
          <title>urcode</title>
          <link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="manifest" href="/manifest.json" />
          <link href='/icon-192x192.png' rel='icon' type='image/png' sizes='192x192' />
          <link href='/icon-256x256.png' rel='icon' type='image/png' sizes='256x256' />
          <link href='/icon-384x384.png' rel='icon' type='image/png' sizes='384x384' />
          <link href='/icon-512x512.png' rel='icon' type='image/png' sizes='512x512' />
          <link rel="apple-touch-icon" href='/icon-192x192.png' />
          <meta name="theme-color" content="#000000" />
      </Head>

        <Component {...pageProps} />
    </div>
  )
}

export default MyApp
