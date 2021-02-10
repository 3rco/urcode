import useTranslation from 'next-translate/useTranslation'

export default function entertainment() {
  let { t } = useTranslation()

  return (
    <section className={"nes-container with-title"} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Entertainment")}</p>
      <blockquote>{t("docs:Entertainment bq")}</blockquote>
      <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Cinema")}</p>
      </section>
      <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Theatre")}</p>
      </section>
      <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Movie")}</p>
      </section>
      <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Series")}</p>
      </section>
      <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:TV")}</p>
      </section>
      <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Book")}</p>
      </section>
      <section className={"nes-container with-title is-rounded"} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Game")}</p>
      </section>
    </section>
  )
}