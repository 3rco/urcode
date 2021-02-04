import Head from 'next/head'
import '../styles/global.css'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
        <link rel="icon" type="image/gif" href="/favicon.gif"/>
      </Head>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
