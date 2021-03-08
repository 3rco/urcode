import useTranslation from 'next-translate/useTranslation'
import styles from './infoSection.module.css'

export default function generateSection() {
  let { t } = useTranslation()

  return (
    <section className={styles.infoSection}>
    {t("docs:Info")}
    </section>
  )
}