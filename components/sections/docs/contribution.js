import useTranslation from 'next-translate/useTranslation'
import dmode from '../../../utils/darkMode'

export default function contribution() {
  let { t } = useTranslation()

  return (
    <section className={dmode()} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Contribution")}</p>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Code")}</p>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Donate")}</p>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Share")}</p>
      </section>
    </section>
  )
}