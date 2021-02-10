import useTranslation from 'next-translate/useTranslation'

export default function politics() {
  let { t } = useTranslation()
  
  return (
    <section className={"nes-container with-title"} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Politics")}</p>
    </section>
  )
}