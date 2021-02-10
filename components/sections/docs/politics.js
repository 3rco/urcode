import useTranslation from 'next-translate/useTranslation'
import dMode from '../../../utils/darkMode'

export default function politics() {
  let { t } = useTranslation()
  
  return (
    <section className={dMode()} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Politics")}</p>
    </section>
  )
}