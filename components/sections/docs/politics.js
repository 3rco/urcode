import useTranslation from 'next-translate/useTranslation'

export default function politics() {
  let { t } = useTranslation()
  
  return (
    <section>
      <h1>{t("docs:Politics")}</h1>
    </section>
  )
}