import useTranslation from 'next-translate/useTranslation'

export default function Appearance() {
  let { t } = useTranslation() 

  return (
    <section>
        <h1>{t("docs:Appearance")}</h1>
        <blockquote>{t("docs:Appearance bq")}</blockquote>
        <h2>{t("docs:Dress")}</h2>
        <blockquote>{t("docs:Dress bq")}</blockquote>
        <h2>{t("docs:Body")}</h2>
        <h3>{t("docs:Length")}</h3>
        <h3>{t("docs:Roundness")}</h3>
    </section>
  )
}