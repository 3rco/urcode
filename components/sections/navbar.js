import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import styles from '../sections/navbar.module.css'

export default function NavBar() {
  let router = useRouter()
  let { t } = useTranslation()

  return (
    <section className={styles.nav}>
      
      <h1 className={styles.nav_item}>
        <Link href="/docs">
          <a>{t("landing:Docs")}</a> 
        </Link>
      </h1>
      <Link style={{placeSelf: "center"}} href="/">
        <a>
        <Image
          src="/img/logo.png"
          alt="urcode"
          width={64}
          height={64}    
        />
        </a>
      </Link> 
      <div className={styles.dropdown}>
        <h1 className={styles.dropbtn}>
          {router.locale}
        </h1>
        <div className={styles.dropdownContent}>
          {router.locales.map((l) => (
            <Link key={l} href={router.asPath} locale={l}>
              <a>{l}</a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
  