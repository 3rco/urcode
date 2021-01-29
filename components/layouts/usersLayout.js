import styles from './usersLayout.module.css'
import Head from 'next/head'

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