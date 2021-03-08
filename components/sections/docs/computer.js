import useTranslation from 'next-translate/useTranslation'
import styles from './computer.module.css'

export default function computer({ onRadioChanged }) {
  let { t } = useTranslation() 

  return (
    <section className={"nes-container with-title " + styles.computer}>
      <p className={"title " + styles.compTitle}>{t("docs:Computer")}</p>
      <section className={"nes-container with-title is-rounded " + styles.computer}>
        <p className={"title " + styles.compTitle}>{t("docs:Web")}</p>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" 
              name="web" value="i3 " onChange={(e) => onRadioChanged(e)}/>
            <span>i3: {t("docs:i3")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="web" value="i2 " onChange={(e) => onRadioChanged(e)}/>
            <span>i2: {t("docs:i2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="web" value="i+ " onChange={(e) => onRadioChanged(e)}/>
            <span>i+: {t("docs:i+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="web" value="i " onChange={(e) => onRadioChanged(e)}/>
            <span>i: {t("docs:i")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="web" value="i- " onChange={(e) => onRadioChanged(e)}/>
            <span>i-: {t("docs:i-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="web" value="i-2 " onChange={(e) => onRadioChanged(e)}/>
            <span>i-2: {t("docs:i-2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="web" value="i-3 " onChange={(e) => onRadioChanged(e)}/>
            <span>i-3: {t("docs:i-3")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="web" value="" onChange={(e) => onRadioChanged(e)}/>
            <span>{t("docs:/i")}</span>
          </label>
        </section>
      </section>
      <section className={"nes-container with-title is-rounded " + styles.computer}>
        <p className={"title " + styles.compTitle}>{t("docs:Smart Phone")}</p>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" 
              name="sp" value="s2 " onChange={(e) => onRadioChanged(e)}/>
            <span>s2: {t("docs:s2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="sp" value="s+ " onChange={(e) => onRadioChanged(e)}/>
            <span>s+: {t("docs:s+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="sp" value="s " onChange={(e) => onRadioChanged(e)}/>
            <span>s: {t("docs:s")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="sp" value="s- " onChange={(e) => onRadioChanged(e)}/>
            <span>s-: {t("docs:s-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="sp" value="s-2 " onChange={(e) => onRadioChanged(e)}/>
            <span>s-2: {t("docs:s-2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="sp" value="!s " onChange={(e) => onRadioChanged(e)}/>
            <span>!s: {t("docs:!s")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="sp" value="" onChange={(e) => onRadioChanged(e)}/>
            <span>{t("docs:/s")}</span>
          </label>
        </section>
      </section>
      <section className={"nes-container with-title is-rounded " + styles.computer}>
        <p className={"title " + styles.compTitle}>{t("docs:Programming")}</p>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" 
              name="pro" value="p2 " onChange={(e) => onRadioChanged(e)}/>
            <span>p2: {t("docs:p2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="pro" value="p+ " onChange={(e) => onRadioChanged(e)}/>
            <span>p+: {t("docs:p+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="pro" value="p " onChange={(e) => onRadioChanged(e)}/>
            <span>p: {t("docs:p")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="pro" value="p- " onChange={(e) => onRadioChanged(e)}/>
            <span>p-: {t("docs:p-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="pro" value="p-2 " onChange={(e) => onRadioChanged(e)}/>
            <span>p-2: {t("docs:p-2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="pro" value="?p " onChange={(e) => onRadioChanged(e)}/>
            <span>?p: {t("docs:?p")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="pro" value="" onChange={(e) => onRadioChanged(e)}/>
            <span>{t("docs:/p")}</span>
          </label>
        </section>
      </section>
    </section>
  )
}
