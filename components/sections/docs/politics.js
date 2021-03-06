import useTranslation from 'next-translate/useTranslation'
import styles from './politics.module.css'

export default function politics({ onRadioChanged }) {
  let { t } = useTranslation()
  
  return (
    <section className={"nes-container with-title " + styles.politics}>
      <p className={"title " + styles.polTitle}>{t("docs:Politics")}</p>
      <section style={{display: 'flex', flexDirection: 'column'}}>
        <label>
            <input type="radio" className="nes-radio" 
              name="po" value="po2 " onChange={(e) => onRadioChanged(e)}/>
            <span>po2: {t("docs:po2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="po" value="po+ " onChange={(e) => onRadioChanged(e)}/>
            <span>po+: {t("docs:po+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="po" value="po " onChange={(e) => onRadioChanged(e)}/>
            <span>po: {t("docs:po")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="po" value="po- " onChange={(e) => onRadioChanged(e)}/>
            <span>po-: {t("docs:po-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="po" value="po-2 " onChange={(e) => onRadioChanged(e)}/>
            <span>po-2: {t("docs:po-2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="po" value="?po " onChange={(e) => onRadioChanged(e)}/>
            <span>?po: {t("docs:?po")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="po" value="@po " onChange={(e) => onRadioChanged(e)}/>
            <span>@po: {t("docs:@po")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="po" value="" onChange={(e) => onRadioChanged(e)}/>
            <span>{t("docs:/po")}</span>
          </label>
      </section>
    </section>
  )
}