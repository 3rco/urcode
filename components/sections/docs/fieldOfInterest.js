import useTranslation from 'next-translate/useTranslation'

export default function fieldOfInterest() {
  let { t } = useTranslation()

  return (
    <section>
      <h1>{t("docs:Field Of Interest")}</h1>
      <blockquote>{t("docs:Field Of Interest bq")}</blockquote>
    </section>
  )
}