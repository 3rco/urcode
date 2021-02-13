import useTranslation from 'next-translate/useTranslation'
import dMode from '../../../utils/darkMode'

export default function politics() {
  let { t } = useTranslation()
  
  return (
    <section className={dMode()} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Politics")}</p>
      <section style={{display: 'flex', flexDirection: 'column'}}>
        <label>
            <input type="radio" className="nes-radio" name="po" />
            <span>po2: {t("docs:po2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="po" />
            <span>po+: {t("docs:po+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="po" />
            <span>p: {t("docs:p")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="po" />
            <span>p-: {t("docs:p-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="po" />
            <span>p-2: {t("docs:p-2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="po" />
            <span>?po: {t("docs:?po")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="po" />
            <span>@po: {t("docs:@po")}</span>
          </label>
      </section>
    </section>
  )
}