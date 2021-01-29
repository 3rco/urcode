import styles from './docsLayout.module.css'
import Head from 'next/head'

export default function docsLayout({ children }) {
  return (
    <div>
      <Head>
        <title>Documentation</title>
      </Head>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}