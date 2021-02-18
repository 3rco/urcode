import useTranslation from 'next-translate/useTranslation'

export default function generateSection({ codeBox, urcode, generateUrcode }) {
  let { t } = useTranslation()

  return (
    <section style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
    <button type="button" className="nes-btn" 
      style={{marginBottom: 20,  width: '25%', marginRight: 'auto', marginLeft: 'auto'}} onClick={() => generateUrcode()}>
        {t("docs:Generate")}
    </button>
    {
      codeBox ?
        <p className="nes-balloon nes-pointer" style={{width: '75%', marginRight: 'auto', marginLeft: 'auto'}}>
          {urcode}
        </p>
        :
        null
    }
  </section>
  )
}