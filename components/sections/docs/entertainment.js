import useTranslation from 'next-translate/useTranslation'
import dmode from '../../../utils/darkMode'

export default function entertainment({ onRadioChanged }) {
  let { t } = useTranslation()

  return (
    <section className={dmode()} style={{marginBottom: "20px"}}>
      <p className={"title"}>{t("docs:Entertainment")}</p>
      <blockquote>{t("docs:Entertainment bq")}</blockquote>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Cinema")} {t("docs:Theatre")}</p>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" name="ct" 
              value="c2" onChange={(e) => onRadioChanged(e)}/>
            <span>c2: {t("docs:c2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="ct" value="c+" onChange={(e) => onRadioChanged(e)}/>
            <span>c+: {t("docs:c+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="ct" value="c" onChange={(e) => onRadioChanged(e)}/>
            <span>c: {t("docs:c")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="ct" value="c-" onChange={(e) => onRadioChanged(e)}/>
            <span>c-: {t("docs:c-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="ct" value="c-2" onChange={(e) => onRadioChanged(e)}/>
            <span>c-2: {t("docs:c-2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="ct" value="!c" onChange={(e) => onRadioChanged(e)}/>
            <span>!c: {t("docs:!c")}</span>
          </label>
        </section>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Movie")}</p>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" 
              name="mv" value="mv3" onChange={(e) => onRadioChanged(e)}/>
            <span>mv3: {t("docs:mv3")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="mv" value="mv2" onChange={(e) => onRadioChanged(e)}/>
            <span>mv2: {t("docs:mv2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="mv" value="mv+" onChange={(e) => onRadioChanged(e)}/>
            <span>mv+: {t("docs:mv+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="mv" value="mv" onChange={(e) => onRadioChanged(e)}/>
            <span>mv: {t("docs:mv")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="mv" value="mv-" onChange={(e) => onRadioChanged(e)}/>
            <span>mv-: {t("docs:mv-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="mv" value="mv-2" onChange={(e) => onRadioChanged(e)}/>
            <span>mv-2: {t("docs:mv-2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="mv" value="mv-3" onChange={(e) => onRadioChanged(e)}/>
            <span>mv-3: {t("docs:mv-3")}</span>
          </label>
        </section>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Series")}</p>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" 
              name="tvs" value="sr3" onChange={(e) => onRadioChanged(e)}/>
            <span>sr3: {t("docs:sr3")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="tvs" value="sr2" onChange={(e) => onRadioChanged(e)}/>
            <span>sr2: {t("docs:sr2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="tvs" value="sr+" onChange={(e) => onRadioChanged(e)}/>
            <span>sr+: {t("docs:sr+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="tvs" value="sr" onChange={(e) => onRadioChanged(e)}/>
            <span>sr: {t("docs:sr")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="tvs" value="sr-" onChange={(e) => onRadioChanged(e)}/>
            <span>sr-: {t("docs:sr-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="tvs" value="sr-2" onChange={(e) => onRadioChanged(e)}/>
            <span>sr-2: {t("docs:sr-2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="tvs" value="sr-3" onChange={(e) => onRadioChanged(e)}/>
            <span>sr-3: {t("docs:sr-3")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="tvs" value="!sr" onChange={(e) => onRadioChanged(e)}/>
            <span>!sr: {t("docs:!s")}</span>
          </label>
        </section>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:TV")}</p>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" 
              name="tv" value="tv+2" onChange={(e) => onRadioChanged(e)}/>
            <span>tv2: {t("docs:tv2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="tv" value="tv+" onChange={(e) => onRadioChanged(e)}/>
            <span>tv+: {t("docs:tv+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="tv" value="tv" onChange={(e) => onRadioChanged(e)}/>
            <span>tv: {t("docs:tv")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="tv" value="tv-" onChange={(e) => onRadioChanged(e)}/>
            <span>tv-: {t("docs:tv-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="tv" value="tv-2" onChange={(e) => onRadioChanged(e)}/>
            <span>tv-2: {t("docs:tv-2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="tv" value="!tv" onChange={(e) => onRadioChanged(e)}/>
            <span>!tv: {t("docs:!tv")}</span>
          </label>
        </section>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Book")}</p>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" 
              name="book" value="b+2" onChange={(e) => onRadioChanged(e)} />
            <span>b2: {t("docs:b2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="book" value="b+" onChange={(e) => onRadioChanged(e)}/>
            <span>b+: {t("docs:b+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="book" value="b" onChange={(e) => onRadioChanged(e)}/>
            <span>b: {t("docs:b")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="book" value="b-" onChange={(e) => onRadioChanged(e)}/>
            <span>b-: {t("docs:b-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="book" value="b-2" onChange={(e) => onRadioChanged(e)}/>
            <span>b-2: {t("docs:b-2")}</span>
          </label>
        </section>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Game")}</p>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" 
              name="game" value="g2" onChange={(e) => onRadioChanged(e)}/>
            <span>g2: {t("docs:g2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="game" value="g+" onChange={(e) => onRadioChanged(e)}/>
            <span>g+: {t("docs:g+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="game" value="g" onChange={(e) => onRadioChanged(e)}/>
            <span>g: {t("docs:g")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="game" value="g-" onChange={(e) => onRadioChanged(e)}/>
            <span>g-: {t("docs:g-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="game" value="g-2" onChange={(e) => onRadioChanged(e)}/>
            <span>g-2: {t("docs:g-2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="game" value="!g" onChange={(e) => onRadioChanged(e)}/>
            <span>!g: {t("docs:!g")}</span>
          </label>
        </section>
      </section>
      <section className={`${dmode()} is-rounded`} style={{marginBottom: "20px"}}>
        <p className={"title"}>{t("docs:Music")}</p>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            <input type="radio" className="nes-radio" 
              name="music" value="mu2" onChange={(e) => onRadioChanged(e)}/>
            <span>mu2: {t("docs:mu2")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="music" value="mu+" onChange={(e) => onRadioChanged(e)}/>
            <span>mu+: {t("docs:mu+")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="music" value="mu" onChange={(e) => onRadioChanged(e)}/>
            <span>mu: {t("docs:mu")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="music" value="mu-" onChange={(e) => onRadioChanged(e)}/>
            <span>mu-: {t("docs:mu-")}</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" 
              name="music" value="mu-2" onChange={(e) => onRadioChanged(e)}/>
            <span>mu-2: {t("docs:mu-2")}</span>
          </label>
        </section>
      </section>
    </section>
  )
}