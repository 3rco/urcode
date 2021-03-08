import useTranslation from 'next-translate/useTranslation'
import styles from './fieldOfInterest.module.css'

export default function fieldOfInterest({ onRadioChanged, onChangeCheckBox }) {
  let { t } = useTranslation()

  return (
    <section className={"nes-container with-title " + styles.interest}>
      <p className={"title " + styles.intTitle}>{t("docs:Field Of Interest")}</p>
      <blockquote>{t("docs:Field Of Interest bq")}</blockquote>
      <section style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          <input type="checkbox" class="nes-checkbox" name="fM" value="fM " onChange={(e) => onChangeCheckBox(e)} />
          <span>fM: {t("docs:fM")}</span>
        </label>
        <label>
          <input type="checkbox" class="nes-checkbox" name="fOA" value="fOA " onChange={(e) => onChangeCheckBox(e)} />
          <span>fOA: {t("docs:fOA")}</span>
        </label>
        <label>
          <input type="checkbox" class="nes-checkbox" name="fP" value="fP " onChange={(e) => onChangeCheckBox(e)} />
          <span>fP: {t("docs:fP")}</span>
        </label>
        <label>
          <input type="checkbox" class="nes-checkbox" name="fD" value="fD " onChange={(e) => onChangeCheckBox(e)} />
          <span>fD: {t("docs:fD")}</span>
        </label>
        <label>
          <input type="checkbox" class="nes-checkbox" name="fVW" value="fVW " onChange={(e) => onChangeCheckBox(e)} />
          <span>fVW: {t("docs:fVW")}</span>
        </label>
        <label>
          <input type="checkbox" class="nes-checkbox" name="fTG" value="fTG " onChange={(e) => onChangeCheckBox(e)} />
          <span>fTG: {t("docs:fTG")}</span>
        </label>
        <label>
          <input type="checkbox" class="nes-checkbox" name="fG" value="fG " onChange={(e) => onChangeCheckBox(e)} />
          <span>fG: {t("docs:fG")}</span>
        </label>
        <label>
          <input type="checkbox" class="nes-checkbox" name="fS" value="fS " onChange={(e) => onChangeCheckBox(e)} />
          <span>fS: {t("docs:fS")}</span>
        </label>
        <label>
          <input type="checkbox" class="nes-checkbox" name="fPU" value="fPU " onChange={(e) => onChangeCheckBox(e)} />
          <span>fPU: {t("docs:fPU")}</span>
        </label>
        <label>
          <input type="checkbox" class="nes-checkbox" name="fA" value="fA " onChange={(e) => onChangeCheckBox(e)} />
          <span>fA: {t("docs:fA")}</span>
        </label>
        <label>
          <input type="checkbox" class="nes-checkbox" name="fO" value="fO " onChange={(e) => onChangeCheckBox(e)} />
          <span>fO: {t("docs:fO")}</span>
        </label>
        <label>
          <input type="checkbox" class="nes-checkbox" name="!f" value="!f " onChange={(e) => onChangeCheckBox(e)} />
          <span>!f: {t("docs:!f")}</span>
        </label>
        <label>
          <input type="checkbox" class="nes-checkbox" name="@f" value="@f " onChange={(e) => onChangeCheckBox(e)} />
          <span>@f: {t("docs:@f")}</span>
        </label>
        <label>
          <input type="checkbox" class="nes-checkbox" name="/f" value="" onChange={(e) => onChangeCheckBox(e)} />
          <span>{t("docs:/f")}</span>
        </label>

      </section>
    </section>
  )
}
