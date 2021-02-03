import { Html } from 'next/document'
import Head from 'next/head'
import '../styles/global.css'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
        <link href='http://fonts.googleapis.com/css?family=Press+Start+2P' rel='stylesheet' type='text/css' />
      </Head>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
