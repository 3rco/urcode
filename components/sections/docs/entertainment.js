import useTranslation from 'next-translate/useTranslation'

export default function entertainment() {
  let { t } = useTranslation()

  return (
    <section>
      <h1>{t("docs:Entertainment")}</h1>
      <h2>{t("docs:Cinema")}</h2>
      <h2>{t("docs:Theatre")}</h2>
      <h2>{t("docs:Movie")}</h2>
      <h2>{t("docs:Series")}</h2>
      <h2>{t("docs:TV")}</h2>
      <h2>{t("docs:Book")}</h2>
      <h2>{t("docs:Game")}</h2>
    </section>
  )
}