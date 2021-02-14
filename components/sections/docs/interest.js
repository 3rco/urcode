import useTranslation from 'next-translate/useTranslation'
import dmode from '../../../utils/darkMode'
import styles from './interest.module.css'

export default function interest({ onRadioChanged }) {
  let { t } = useTranslation()

  return (
    <section className={dmode()} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Interest")}</p>
      <section className={styles.options}>
        <label>
          <input type="radio" className="nes-radio" 
            value="uA" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uA: {t("docs:uA")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uCS" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uCS: {t("docs:uCS")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uC" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uC: {t("docs:uC")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uE" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uE: {t("docs:uE")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uEC" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uEC: {t("docs:uEC")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uED" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uED: {t("docs:uED")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uFA" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uFA: {t("docs:uFA")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uG" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uG: {t("docs:uG")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uIT" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uIT: {t("docs:uIT")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uJ" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uJ: {t("docs:uJ")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uLS" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uLS: {t("docs:uLS")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uL" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uL: {t("docs:uL")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uMC" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uMC: {t("docs:uMC")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uM" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uM: {t("docs:uM")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uMD" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uMD: {t("docs:uMD")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uMU" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uMU: {t("docs:uMU")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uPA" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uPA: {t("docs:uPA")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uP" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uP: {t("docs:uP")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uS" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uS: {t("docs:uS")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uSP" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uSP: {t("docs:uSP")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uSS" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uSS: {t("docs:uSS")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uO" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uO: {t("docs:uO")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uU" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uU: {t("docs:uU")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="uAT" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>uAT: {t("docs:uAT")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="!u" name="interest" onChange={(e) => onRadioChanged(e)}/>
          <span>!u: {t("docs:!u")}</span>
        </label>
      </section>
    </section>
  )
}