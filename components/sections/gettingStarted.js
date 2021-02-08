import useTranslation from 'next-translate/useTranslation'
import styles from '../sections/gettingStarted.module.css'
import Link from 'next/link'
import useDarkMode from 'use-dark-mode';

export default function gettingStarted() {
  let { t } = useTranslation() 
  
  const darkMode = useDarkMode(true);
  const dtheme = "nes-container is-dark with-title is-centered";
  const ltheme = "nes-container with-title is-centered";
  const theme = darkMode.value ? dtheme : ltheme;
  
  return (
    <div className={theme} style={{margin:50}}>
       
        <p className={"title"}>{t("landing:Getting Started")}</p>

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