import useTranslation from 'next-translate/useTranslation'
import dmode from '../../../utils/darkMode'

export default function Appearance({ onRadioChanged }) {
  let { t } = useTranslation() 

  return (
    <section className={dmode()} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Appearance")}</p>
        <blockquote>{t("docs:Appearance bq")}</blockquote>
        <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
          <p className={"title"}>{t("docs:Dress")}</p>
          <blockquote>{t("docs:Dress bq")}</blockquote>
          <section style={{display: 'flex', flexDirection: 'column'}}>
            <label>
              <input type="radio" className="nes-radio" 
                value="d3 " name="dress" onChange={(e) => onRadioChanged(e)}/>
              <span>d3: {t("docs:d3")}</span>
            </label>
            <label>
              <input type="radio" className="nes-radio" 
                value="d2 " name="dress" onChange={(e) => onRadioChanged(e)}/>
              <span>d2: {t("docs:d2")}</span>
            </label>
            <label>
              <input type="radio" className="nes-radio" 
                value="d+ " name="dress" onChange={(e) => onRadioChanged(e)}/>
              <span>d+: {t("docs:d+")}</span>
            </label>
            <label>
              <input type="radio" className="nes-radio" 
                value="d " name="dress" onChange={(e) => onRadioChanged(e)}/>
              <span>d: {t("docs:d")}</span>
            </label>
            <label>
              <input type="radio" className="nes-radio" 
                value="d- " name="dress" onChange={(e) => onRadioChanged(e)}/>
              <span>d-: {t("docs:d-")}</span>
            </label>
            <label>
              <input type="radio" className="nes-radio" 
                value="d-2 " name="dress" onChange={(e) => onRadioChanged(e)}/>
              <span>d-2: {t("docs:d-2")}</span>
            </label>
            <label>
              <input type="radio" className="nes-radio" 
                value="d-3 " name="dress" onChange={(e) => onRadioChanged(e)}/>
              <span>d-3: {t("docs:d-3")}</span>
            </label>
            <label>
              <input type="radio" className="nes-radio" 
                value="dx " name="dress" onChange={(e) => onRadioChanged(e)}/>
              <span>dx: {t("docs:dx")}</span>
            </label>
            <label>
              <input type="radio" className="nes-radio" 
                value="!d " name="dress" onChange={(e) => onRadioChanged(e)}/>
              <span>!d: {t("docs:!d")}</span>
            </label>
            <label>
              <input type="radio" className="nes-radio" 
                value="" name="dress" onChange={(e) => onRadioChanged(e)}/>
              <span>{t("docs:/d")}</span>
            </label>
          </section>
        </section>
        <section className={`${dmode()} is-rounded`}>
          <p className={"title"}>{t("docs:Body")}</p>
          <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
            <p className={"title"}>{t("docs:Length")}</p>
            <section style={{display: 'flex', flexDirection: 'column'}}>
              <label>
                <input type="radio" className="nes-radio" 
                  value="l2 " name="len" onChange={(e) => onRadioChanged(e)}/>
                <span>l2: {t("docs:l2")}</span>
              </label>
              <label>
                <input type="radio" className="nes-radio" 
                  value="l+ " name="len" onChange={(e) => onRadioChanged(e)}/>
                <span>l+: {t("docs:l+")}</span>
              </label>
              <label>
                <input type="radio" className="nes-radio" 
                  value="l " name="len" onChange={(e) => onRadioChanged(e)}/>
                <span>l: {t("docs:l")}</span>
              </label>
              <label>
                <input type="radio" className="nes-radio" 
                  value="l- " name="len" onChange={(e) => onRadioChanged(e)}/>
                <span>l-: {t("docs:l-")}</span>
              </label>
              <label>
                <input type="radio" className="nes-radio" 
                  value="l-2 " name="len" onChange={(e) => onRadioChanged(e)}/>
                <span>l-2: {t("docs:l-2")}</span>
              </label>
              <label>
                <input type="radio" className="nes-radio" 
                  value="" name="len" onChange={(e) => onRadioChanged(e)}/>
                <span>{t("docs:/l")}</span>
              </label>
            </section>
          </section>
          <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
            <p className={"title"}>{t("docs:Roundness")}</p>
            <section style={{display: 'flex', flexDirection: 'column'}}>
              <label>
                <input type="radio" className="nes-radio" 
                  value="ro2 " name="rou" onChange={(e) => onRadioChanged(e)}/>
                <span>ro2: {t("docs:ro2")}</span>
              </label>
              <label>
                <input type="radio" className="nes-radio" 
                  value="ro+ " name="rou" onChange={(e) => onRadioChanged(e)}/>
                <span>ro+: {t("docs:ro+")}</span>
              </label>
              <label>
                <input type="radio" className="nes-radio" 
                  value="ro " name="rou" onChange={(e) => onRadioChanged(e)}/>
                <span>ro: {t("docs:ro")}</span>
              </label>
              <label>
                <input type="radio" className="nes-radio" 
                value="ro- " name="rou" onChange={(e) => onRadioChanged(e)}/>
                <span>ro-: {t("docs:ro-")}</span>
              </label>
              <label>
                <input type="radio" className="nes-radio" 
                  value="ro-2 " name="rou" onChange={(e) => onRadioChanged(e)}/>
                <span>ro-2: {t("docs:ro-2")}</span>
              </label>
              <label>
                <input type="radio" className="nes-radio" 
                  value="" name="rou" onChange={(e) => onRadioChanged(e)}/>
                <span>{t("docs:/ro")}</span>
              </label>
            </section>
          </section>
        </section>
        <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px", display: 'flex', flexDirection: 'column'}}>
          <p className={"title"}>{t("docs:Age")}</p>
          <label>
            <input type="radio" className="nes-radio" 
              value="a5 " name="age" onChange={(e) => onRadioChanged(e)}/>
            <span>a5: {'>'}60</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              value="a4 " name="age" onChange={(e) => onRadioChanged(e)}/>
            <span>a4: 55-60</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              value="a3 " name="age" onChange={(e) => onRadioChanged(e)}/>
            <span>a3: 45-50</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              value="a2 " name="age" onChange={(e) => onRadioChanged(e)}/>
            <span>a2: 40-45</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              value="a+ " name="age" onChange={(e) => onRadioChanged(e)}/>
            <span>a+: 35-40</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              value="a " name="age" onChange={(e) => onRadioChanged(e)}/>
            <span>a: 30-35</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              value="a- " name="age" onChange={(e) => onRadioChanged(e)}/>
            <span>a-: 25-30</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              value="a-2 " name="age" onChange={(e) => onRadioChanged(e)}/>
            <span>a-2: 20-25</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              value="a-3 " name="age" onChange={(e) => onRadioChanged(e)}/>
            <span>a-3: 15-20</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              value="a-4 " name="age" onChange={(e) => onRadioChanged(e)}/>
            <span>a-4: 10-15</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              value="a-5 " name="age" onChange={(e) => onRadioChanged(e)}/>
            <span>a-5: {'<'}10</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              value="" name="age" onChange={(e) => onRadioChanged(e)}/>
            <span>{t("docs:/a")}</span>
          </label>
        </section>
    </section>
  )
}