import useTranslation from 'next-translate/useTranslation'
import dmode from '../../../utils/darkMode'

export default function entertainment() {
  let { t } = useTranslation()

  return (
    <section className={dmode()} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Entertainment")}</p>
      <blockquote>{t("docs:Entertainment bq")}</blockquote>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Cinema")}</p>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Theatre")}</p>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Movie")}</p>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Series")}</p>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:TV")}</p>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Book")}</p>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Game")}</p>
      </section>
    </section>
  )
}