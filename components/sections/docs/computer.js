import useTranslation from 'next-translate/useTranslation'
import dmode from '../../../utils/darkMode'

export default function computer() {
  let { t } = useTranslation() 

  return (
    <section className={dmode()} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Computer")}</p>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Web")}</p>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" name="web" />
            <span>i3: {t("docs:i3")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="web" />
            <span>i2: {t("docs:i2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="web" />
            <span>i+: {t("docs:i+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="web" />
            <span>i: {t("docs:i")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="web" />
            <span>i-: {t("docs:i-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="web" />
            <span>i-2: {t("docs:i-2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="web" />
            <span>i-3: {t("docs:i-3")}</span>
          </label>
        </section>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Smart Phone")}</p>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" name="sp" />
            <span>s2: {t("docs:s2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="sp" />
            <span>s+: {t("docs:s+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="sp" />
            <span>s: {t("docs:s")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="sp" />
            <span>s-: {t("docs:s-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="sp" />
            <span>s-2: {t("docs:s-2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="sp" />
            <span>!s: {t("docs:!s")}</span>
          </label>
        </section>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Programming")}</p>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" name="pro" />
            <span>p2: {t("docs:p2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="pro" />
            <span>p+: {t("docs:p+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="pro" />
            <span>p: {t("docs:p")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="pro" />
            <span>p-: {t("docs:p-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="pro" />
            <span>p-2: {t("docs:p-2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="pro" />
            <span>?p: {t("docs:?p")}</span>
          </label>
        </section>
      </section>
    </section>
  )
}
