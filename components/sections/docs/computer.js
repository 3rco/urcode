import useTranslation from 'next-translate/useTranslation'
import dmode from '../../../utils/darkMode'

export default function computer() {
  let { t } = useTranslation() 

  return (
    <section className={dmode()} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Computer")}</p>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Web")}</p>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Smart Phone")}</p>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Programming")}</p>
      </section>
    </section>
  )
}