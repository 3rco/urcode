import useTranslation from 'next-translate/useTranslation'
import dmode from '../../../utils/darkMode'

export default function lifestyle() {
  let { t } = useTranslation()

  return (
    <section className={dmode()} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Lifestyle")}</p>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Education")}</p>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" name="edu" checked />
            <span>e2: {t("docs:e2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="edu" />
            <span>e+: {t("docs:e+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="edu" />
            <span>e: {t("docs:e")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="edu" />
            <span>e-: {t("docs:e-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="edu" />
            <span>e-2: {t("docs:e-2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="edu" />
            <span>!e: {t("docs:!e")}</span>
          </label>
        </section>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:House")}</p>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" name="house" />
            <span>h2: {t("docs:h2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="house" />
            <span>h+: {t("docs:h+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="house" />
            <span>h: {t("docs:h")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="house" />
            <span>h-: {t("docs:h-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="house" />
            <span>h-2: {t("docs:h-2")}</span>
          </label>
        </section>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Relationship")}</p>
        <blockquote>{t("docs:Relationship bq")}</blockquote>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" name="rela" />
            <span>r2: {t("docs:r2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="rela" />
            <span>r+: {t("docs:r+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="rela" />
            <span>r: {t("docs:r")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="rela" />
            <span>r-: {t("docs:r-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="rela" />
            <span>r-2: {t("docs:r-2")}</span>
          </label>
        </section>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Job")}</p>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" name="job" />
            <span>j2: {t("docs:j2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="job" />
            <span>j+: {t("docs:j+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="job" />
            <span>j: {t("docs:j")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="job" />
            <span>j-: {t("docs:j-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="job" />
            <span>j-2: {t("docs:j-2")}</span>
          </label>
        </section>
      </section>
    </section>
  )
}
