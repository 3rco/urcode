import Link from 'next/link'
import Image from 'next/image'

import styles from '../sections/navbar.module.css'

export default function NavBar() {
  return (
    <section className={styles.nav}>
      <h1 className={styles.nav_item}>
        <Link href="/docs">
          <a>Docs</a> 
        </Link>
      </h1>
      <Link href="/">
        <Image
          className={{placeSelf: "flex-end"}}
          src="/img/monochrome-black.svg"
          alt="Picture of the author"
          width={128}
          height={128}
        />
      </Link>
      <h1 className={styles.nav_item}>
        <Link href="/users">
          <a>Links</a> 
        </Link>
      </h1>
    </section>
  )
}
  