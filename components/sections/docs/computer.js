import useTranslation from 'next-translate/useTranslation'

export default function computer() {
  let { t } = useTranslation() 

  return (
    <section className={"nes-container with-title"} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Computer")}</p>
      <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Web")}</p>
      </section>
      <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Smart Phone")}</p>
      </section>
      <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Programming")}</p>
      </section>
    </section>
  )
}