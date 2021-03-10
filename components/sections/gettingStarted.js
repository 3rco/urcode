import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import styles from '../sections/gettingStarted.module.css'
import dmode from '../../utils/darkMode'

export default function gettingStarted() {
  let { t } = useTranslation()
  
  return (
    <div className={dmode()} style={{margin:10, marginTop:35}}>
       
        <p className={"title " + styles.getTitle}>{t("landing:Getting Started")}</p>

        <h3 className={styles.h3}>{t("landing:Our Goal")}</h3>
        <p className={styles.p}>
          {t("landing:Our Goal Content")}
        </p>

        <h3 className={styles.h3}>{t("landing:What is urcode?")}</h3>
        <p className={styles.p}>
          {t("landing:What is urcode? p1")}
        </p>
        <p className={styles.p}>
          {t("landing:What is urcode? p2")}
        </p>
        <p className={styles.inspiration}>
          {t("landing:inspiration")}<a href="https://www.geekcode.xyz/" target="_blank">geek code</a>
        </p>

        <h3 className={styles.h3}>{t("landing:how to get started?")}</h3>
        <p className={styles.p}>
          {t("landing:how to get started? p1")}
        </p>
        <Link href="/docs"><a className={"nes-btn"}>{t("landing:Start")}</a></Link>
    </div>
  )
}