import useTranslation from 'next-translate/useTranslation'

export default function Appearance() {
  let { t } = useTranslation() 

  return (
    <section className={"nes-container with-title"} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Appearance")}</p>
        <blockquote>{t("docs:Appearance bq")}</blockquote>
        <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
          <p className={"title"}>{t("docs:Dress")}</p>
          <blockquote>{t("docs:Dress bq")}</blockquote>
        </section>
        <section className={"nes-container with-title is-rounded"}>
          <p className={"title"}>{t("docs:Body")}</p>
          <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
            <p className={"title"}>{t("docs:Length")}</p>
          </section>
          <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
            <p className={"title"}>{t("docs:Roundness")}</p>
          </section>
        </section>
    </section>
  )
}
