import useTranslation from 'next-translate/useTranslation'

export default function contribution() {
  let { t } = useTranslation()

  return (
    <section className={"nes-container with-title"} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Contribution")}</p>
      <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Code")}</p>
      </section>
      <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Donate")}</p>
      </section>
      <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Share")}</p>
      </section>
    </section>
  )
}