import useTranslation from 'next-translate/useTranslation'
import dmode from '../../../utils/darkMode'
import styles from './interest.module.css'

export default function entertainment() {
  let { t } = useTranslation()

  return (
    <section className={dmode()} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Interest")}</p>
      <section className={styles.options}>
        <label>
          <input type="radio" className="nes-radio" name="interest" checked />
          <span>uA: {t("docs:uA")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uCS: {t("docs:uCS")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uC: {t("docs:uC")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uE: {t("docs:uE")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uEC: {t("docs:uEC")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uED: {t("docs:uED")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uFA: {t("docs:uFA")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uG: {t("docs:uG")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uIT: {t("docs:uIT")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uJ: {t("docs:uJ")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uLS: {t("docs:uLS")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uL: {t("docs:uL")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uMC: {t("docs:uMC")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uM: {t("docs:uM")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uMD: {t("docs:uMD")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uMU: {t("docs:uMU")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uPA: {t("docs:uPA")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uP: {t("docs:uP")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uS: {t("docs:uS")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uSP: {t("docs:uSP")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uSS: {t("docs:uSS")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uO: {t("docs:uO")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uU: {t("docs:uU")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>uAT: {t("docs:uAT")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="interest" />
          <span>!u: {t("docs:!u")}</span>
        </label>
      </section>
    </section>
  )
}