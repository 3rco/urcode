import useTranslation from 'next-translate/useTranslation'
import dmode from '../../../utils/darkMode'

export default function contribution() {
  let { t } = useTranslation()

  return (
    <section className={dmode()} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Contribution")}</p>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Code")}</p>
        <p><a href="https://github.com/3rco/urcode/blob/master/data/users.js" target="_blank">Example</a></p>
        <p>{t("docs:CCode")}</p>
        <p><a href="https://github.com/3rco/urcode" target="_blank">Github Repo</a></p>
        <p>{t("docs:CCode2")}</p>
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