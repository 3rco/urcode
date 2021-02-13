import useTranslation from 'next-translate/useTranslation'
import dmode from '../../../utils/darkMode'

export default function fieldOfInterest() {
  let { t } = useTranslation()

  return (
    <section className={dmode()} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Field Of Interest")}</p>
      <blockquote>{t("docs:Field Of Interest bq")}</blockquote>
      <section style={{display: 'flex', flexDirection: 'column'}}>
        <label>
          <input type="radio" className="nes-radio" name="foi" checked />
          <span>fM: {t("docs:fM")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="foi" />
          <span>fOA: {t("docs:fOA")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="foi" />
          <span>fP: {t("docs:fP")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="foi" />
          <span>fD: {t("docs:fD")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="foi" />
          <span>fVW: {t("docs:fVW")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="foi" />
          <span>fTG: {t("docs:fTG")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="foi" />
          <span>fG: {t("docs:fG")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="foi" />
          <span>fS: {t("docs:fS")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="foi" />
          <span>fPU: {t("docs:fPU")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="foi" />
          <span>fA: {t("docs:fA")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="foi" />
          <span>fO: {t("docs:fO")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="foi" />
          <span>!f: {t("docs:!f")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" name="foi" />
          <span>@f: {t("docs:@f")}</span>
        </label>
      </section>
    </section>
  )
}
