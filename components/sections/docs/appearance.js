import useTranslation from 'next-translate/useTranslation'
import dmode from '../../../utils/darkMode'

export default function Appearance() {
  let { t } = useTranslation() 

  return (
    <section className={dmode()} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Appearance")}</p>
        <blockquote>{t("docs:Appearance bq")}</blockquote>
        <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
          <p className={"title"}>{t("docs:Dress")}</p>
          <blockquote>{t("docs:Dress bq")}</blockquote>
        </section>
        <section className={`${dmode()} is-rounded`}>
          <p className={"title"}>{t("docs:Body")}</p>
          <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
            <p className={"title"}>{t("docs:Length")}</p>
            <section style={{display: 'flex', flexDirection: 'column'}}>
              <label>
                <input type="radio" className="nes-radio" name="len" />
                <span>l2: {t("docs:l2")}</span>
              </label>
              <label>
                <input type="radio" className="nes-radio" name="len" />
                <span>l+: {t("docs:l+")}</span>
              </label>
              <label>
                <input type="radio" className="nes-radio" name="len" />
                <span>l: {t("docs:l")}</span>
              </label>
              <label>
                <input type="radio" className="nes-radio" name="len" />
                <span>j-: {t("docs:l-")}</span>
              </label>
              <label>
                <input type="radio" className="nes-radio" name="len" />
                <span>l-2: {t("docs:l-2")}</span>
              </label>
            </section>
          </section>
          <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
            <p className={"title"}>{t("docs:Roundness")}</p>
            <section style={{display: 'flex', flexDirection: 'column'}}>
              <label>
                <input type="radio" className="nes-radio" name="rou" />
                <span>ro2: {t("docs:ro2")}</span>
              </label>
              <label>
                <input type="radio" className="nes-radio" name="rou" />
                <span>ro+: {t("docs:ro+")}</span>
              </label>
              <label>
                <input type="radio" className="nes-radio" name="rou" />
                <span>ro: {t("docs:ro")}</span>
              </label>
              <label>
                <input type="radio" className="nes-radio" name="rou" />
                <span>ro-: {t("docs:ro-")}</span>
              </label>
              <label>
                <input type="radio" className="nes-radio" name="rou" />
                <span>ro-2: {t("docs:ro-2")}</span>
              </label>
            </section>
          </section>
        </section>
        <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px", display: 'flex', flexDirection: 'column'}}>
          <p className={"title"}>{t("docs:Age")}</p>
          <label>
            <input type="radio" className="nes-radio" name="age" checked />
            <span>a5: {'>'}60</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="age" />
            <span>a4: 55-60</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="age" />
            <span>a3: 45-50</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="age" />
            <span>a2: 40-45</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="age" />
            <span>a+: 35-40</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="age" />
            <span>a: 30-35</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="age" />
            <span>a-: 25-30</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="age" />
            <span>a-2: 20-25</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="age" />
            <span>a-3: 15-20</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="age" />
            <span>a-4: 10-15</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="age" />
            <span>a--5: {'<'}10</span>
          </label>
        </section>
    </section>
  )
}









