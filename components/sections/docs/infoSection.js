import useTranslation from 'next-translate/useTranslation'

export default function generateSection() {
  let { t } = useTranslation()

  return (
    <section style={{display: 'flex',  justifyContent: 'center', textAlign:'center', marginBottom:20}}>
    {t("docs:Info")}
    </section>
  )
}