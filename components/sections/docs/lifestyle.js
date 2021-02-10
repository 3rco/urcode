import useTranslation from 'next-translate/useTranslation'
import dmode from '../../../utils/darkMode'

export default function lifestyle() {
  let { t } = useTranslation()

  return (
    <section className={dmode()} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Lifestyle")}</p>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Education")}</p>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:House")}</p>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Relationship")}</p>
        <blockquote>{t("docs:Relationship bq")}</blockquote>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Job")}</p>
      </section>
    </section>
  )
}