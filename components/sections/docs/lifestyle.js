import useTranslation from 'next-translate/useTranslation'

export default function lifestyle() {
  let { t } = useTranslation()

  return (
    <section className={"nes-container with-title"} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Lifestyle")}</p>
      <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Education")}</p>
      </section>
      <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:House")}</p>
      </section>
      <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Relationship")}</p>
        <blockquote>{t("docs:Relationship bq")}</blockquote>
      </section>
      <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Job")}</p>
      </section>
    </section>
  )
}