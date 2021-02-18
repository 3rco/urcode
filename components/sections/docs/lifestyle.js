import useTranslation from 'next-translate/useTranslation'
import dmode from '../../../utils/darkMode'

export default function lifestyle({ onRadioChanged }) {
  let { t } = useTranslation()

  return (
    <section className={dmode()} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Lifestyle")}</p>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Education")}</p>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" 
              name="edu" value="e2" onChange={(e) => onRadioChanged(e)}/>
            <span>e2: {t("docs:e2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="edu" value="e+" onChange={(e) => onRadioChanged(e)}/>
            <span>e+: {t("docs:e+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="edu" value="e" onChange={(e) => onRadioChanged(e)}/>
            <span>e: {t("docs:e")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="edu" value="e-" onChange={(e) => onRadioChanged(e)}/>
            <span>e-: {t("docs:e-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="edu" value="e-2" onChange={(e) => onRadioChanged(e)}/>
            <span>e-2: {t("docs:e-2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="edu" value="!e" onChange={(e) => onRadioChanged(e)}/>
            <span>!e: {t("docs:!e")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="edu" value="" onChange={(e) => onRadioChanged(e)}/>
            <span>{t("docs:/e")}</span>
          </label>
        </section>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:House")}</p>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" 
              name="house" value="h2" onChange={(e) => onRadioChanged(e)}/>
            <span>h2: {t("docs:h2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="house" value="h+" onChange={(e) => onRadioChanged(e)} />
            <span>h+: {t("docs:h+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="house" 
              value="h" onChange={(e) => onRadioChanged(e)} />
            <span>h: {t("docs:h")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="house" value="h-" onChange={(e) => onRadioChanged(e)} />
            <span>h-: {t("docs:h-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="house" value="h-2" onChange={(e) => onRadioChanged(e)} />
            <span>h-2: {t("docs:h-2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="house" value="" onChange={(e) => onRadioChanged(e)} />
            <span>{t("docs:/h")}</span>
          </label>
        </section>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Relationship")}</p>
        <blockquote>{t("docs:Relationship bq")}</blockquote>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" 
              name="rela" value="r2" onChange={(e) => onRadioChanged(e)}/>
            <span>r2: {t("docs:r2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="rela" value="r+" onChange={(e) => onRadioChanged(e)}/>
            <span>r+: {t("docs:r+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="rela" value="r" onChange={(e) => onRadioChanged(e)}/>
            <span>r: {t("docs:r")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="rela" value="r-" onChange={(e) => onRadioChanged(e)}/>
            <span>r-: {t("docs:r-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="rela" value="r-2" onChange={(e) => onRadioChanged(e)}/>
            <span>r-2: {t("docs:r-2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="rela" value="" onChange={(e) => onRadioChanged(e)}/>
            <span>{t("docs:/r")}</span>
          </label>
        </section>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Job")}</p>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" 
              name="job" value="j2" onChange={(e) => onRadioChanged(e)} />
            <span>j2: {t("docs:j2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="job" value="j+" onChange={(e) => onRadioChanged(e)}/>
            <span>j+: {t("docs:j+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="job" value="j" onChange={(e) => onRadioChanged(e)}/>
            <span>j: {t("docs:j")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="job" value="j-" onChange={(e) => onRadioChanged(e)}/>
            <span>j-: {t("docs:j-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="job" value="j-2" onChange={(e) => onRadioChanged(e)}/>
            <span>j-2: {t("docs:j-2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="job" value="" onChange={(e) => onRadioChanged(e)}/>
            <span>{t("docs:/j")}</span>
          </label>
        </section>
      </section>
    </section>
  )
}
