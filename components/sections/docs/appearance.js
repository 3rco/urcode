import useTranslation from 'next-translate/useTranslation'
import dmode from '../../../utils/darkMode'

export default function Appearance() {
  let { t } = useTranslation() 

  return (
    <section className={dmode()} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Appearance")}</p>
        <blockquote>{t("docs:Appearance bq")}</blockquote>
        <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
          <p className={"title"}>{t("docs:Dress")}</p>
          <blockquote>{t("docs:Dress bq")}</blockquote>
        </section>
        <section className={`${dmode()} is-rounded`}>
          <p className={"title"}>{t("docs:Body")}</p>
          <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
            <p className={"title"}>{t("docs:Length")}</p>
          </section>
          <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
            <p className={"title"}>{t("docs:Roundness")}</p>
          </section>
        </section>
    </section>
  )
}
