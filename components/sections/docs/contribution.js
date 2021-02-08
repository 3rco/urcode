import useTranslation from 'next-translate/useTranslation'

export default function contribution() {
  let { t } = useTranslation()

  return (
    <section>
      <h1>{t("docs:Contribution")}</h1>
      <h2>{t("docs:Code")}</h2>
      <h2>{t("docs:Donate")}</h2>
      <h2>{t("docs:Share")}</h2>
    </section>
  )
}