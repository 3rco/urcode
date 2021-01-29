import styles from './homeLayout.module.css'
import Head from 'next/head'

export default function homeLayout({ children }) {
  return (
    <div>
      <Head>
        <title>urcode</title>
      </Head>
      <div className={styles.container}>{children}</div>
    </div>

  )
}