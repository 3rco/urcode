import { Html } from 'next/document'
import Head from 'next/head'
import '../styles/global.css'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link href="/fontawesome-free-5.15.2-web/css/all.css" rel="stylesheet" />
      </Head>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
