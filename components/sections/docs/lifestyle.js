import useTranslation from 'next-translate/useTranslation'

export default function lifestyle() {
  let { t } = useTranslation()

  return (
    <section>
      <h1>{t("docs:Lifestyle")}</h1>
      <h2>{t("docs:Education")}</h2>
      <h2>{t("docs:House")}</h2>
      <h2>{t("docs:Relationship")}</h2>
      <blockquote>{t("docs:Relationship bq")}</blockquote>
      <h2>{t("docs:Job")}</h2>
    </section>
  )
}