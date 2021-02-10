import useTranslation from 'next-translate/useTranslation'

export default function fieldOfInterest() {
  let { t } = useTranslation()

  return (
    <section className={"nes-container with-title"} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Field Of Interest")}</p>
      <blockquote>{t("docs:Field Of Interest bq")}</blockquote>
    </section>
  )
}