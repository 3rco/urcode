import Head from 'next/head'
import styles from './usersLayout.module.css'

export default function usersLayout({ children }) {
    return (
      <div>
        <Head>
          <title>Users</title>
        </Head>
        <div className={styles.container}>{children}</div>
      </div>  
    )
  }