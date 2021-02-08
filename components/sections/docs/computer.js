import useTranslation from 'next-translate/useTranslation'

export default function computer() {
  let { t } = useTranslation() 

  return (
    <section>
      <h1>{t("docs:Computer")}</h1>
      <h2>{t("docs:Web")}</h2>
      <h2>{t("docs:Smart Phone")}</h2>
      <h2>{t("docs:Programming")}</h2>
    </section>
  )
}