import useTranslation from 'next-translate/useTranslation'
import dmode from '../../../utils/darkMode'

export default function fieldOfInterest() {
  let { t } = useTranslation()

  return (
    <section className={dmode()} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Field Of Interest")}</p>
      <blockquote>{t("docs:Field Of Interest bq")}</blockquote>
    </section>
  )
}