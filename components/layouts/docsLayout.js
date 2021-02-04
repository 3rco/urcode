import Head from 'next/head'
import styles from './docsLayout.module.css'


export default function docsLayout({ children }) {
  return (
    <div>
      <Head>
        <title>Documentation</title>
      </Head>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
