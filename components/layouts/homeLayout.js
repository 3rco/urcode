import Head from 'next/head'

import styles from './homeLayout.module.css'

export default function homeLayout({ children }) {
  return (
    <div>
      <Head>
        <title>urcode</title>
      </Head>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}