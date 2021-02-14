import useTranslation from 'next-translate/useTranslation'
import dmode from '../../../utils/darkMode'

export default function fieldOfInterest({ onRadioChanged }) {
  let { t } = useTranslation()

  return (
    <section className={dmode()} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Field Of Interest")}</p>
      <blockquote>{t("docs:Field Of Interest bq")}</blockquote>
      <section style={{display: 'flex', flexDirection: 'column'}}>
        <label>
          <input type="radio" className="nes-radio" 
            value="fM" name="foi" onChange={(e) => onRadioChanged(e)}/>
          <span>fM: {t("docs:fM")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="fOA" name="foi" onChange={(e) => onRadioChanged(e)}/>
          <span>fOA: {t("docs:fOA")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="fP" name="foi" onChange={(e) => onRadioChanged(e)}/>
          <span>fP: {t("docs:fP")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="fD" name="foi" onChange={(e) => onRadioChanged(e)}/>
          <span>fD: {t("docs:fD")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="fVW" name="foi" onChange={(e) => onRadioChanged(e)}/>
          <span>fVW: {t("docs:fVW")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="fTG" name="foi" onChange={(e) => onRadioChanged(e)}/>
          <span>fTG: {t("docs:fTG")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="fG" name="foi" onChange={(e) => onRadioChanged(e)}/>
          <span>fG: {t("docs:fG")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="fS" name="foi" onChange={(e) => onRadioChanged(e)}/>
          <span>fS: {t("docs:fS")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="fPU" name="foi" onChange={(e) => onRadioChanged(e)}/>
          <span>fPU: {t("docs:fPU")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="fA" name="foi" onChange={(e) => onRadioChanged(e)}/>
          <span>fA: {t("docs:fA")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="fO" name="foi" onChange={(e) => onRadioChanged(e)}/>
          <span>fO: {t("docs:fO")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="!f" name="foi" onChange={(e) => onRadioChanged(e)}/>
          <span>!f: {t("docs:!f")}</span>
        </label>
        <label>
          <input type="radio" className="nes-radio" 
            value="@f" name="foi" onChange={(e) => onRadioChanged(e)}/>
          <span>@f: {t("docs:@f")}</span>
        </label>
      </section>
    </section>
  )
}
