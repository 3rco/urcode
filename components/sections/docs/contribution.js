import useTranslation from 'next-translate/useTranslation'
import styles from './contribution.module.css'
import Image from 'next/image'
import { FacebookShareButton, TwitterShareButton, RedditShareButton, LinkedinShareButton } from "react-share";
export default function contribution() {
  let { t } = useTranslation()

  return (
    <section className={"nes-container with-title " + styles.contribution}>
      <p className={"title " + styles.contTitle}>{t("docs:Contribution")}</p>
      <section className={"nes-container with-title is-rounded " + styles.contribution}>
        <p className={"title " + styles.contTitle}>{t("docs:Code")}</p>
        <p><a href="https://github.com/3rco/urcode/blob/master/data/users.js" target="_blank">Example</a></p>
        <p>{t("docs:CCode")}</p>
        <p><a href="https://github.com/3rco/urcode" target="_blank">Github Repo</a></p>
        <p>{t("docs:CCode2")}</p>
      </section>
      <section className={"nes-container with-title is-rounded " + styles.contribution}>
        <p className={"title " + styles.contTitle}>{t("docs:Donate")}</p>
        <section style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', overflow:'auto' }}>
          <Image
            src="/img/doge.gif"
            alt="dark"
            width={64}
            height={64}
          />
          <p style={{ marginTop: 15 }}> &nbsp;D7KJmWuKyBfMe8C3xEhKU2zFCdbs26qCXM</p>
        </section>
      </section>
      <section className={"nes-container with-title is-rounded " + styles.contribution}>
        <p className={"title " + styles.contTitle}>{t("docs:Share")}</p>
        <section style={{ display: 'flex', justifyContent: 'space-around' }}>          
          <FacebookShareButton
            url="https://urcode.link/"
            quote={"Generate your code that describes you"}
            hashtag="#urcodee">
            <i class="nes-icon facebook is-medium"></i>
          </FacebookShareButton>
          <TwitterShareButton
            url="https://urcode.link/"
            title="Generate your code that describes you"
            via="https://urcode.link/"
            hashtag="#urcodee">
            <i class="nes-icon twitter is-medium"></i>
          </TwitterShareButton>
          <RedditShareButton
            url="https://urcode.link/"
            title={"Generate your code that describes you"}
          >
            <i class="nes-icon reddit is-medium"></i>
          </RedditShareButton>
          <LinkedinShareButton
            url="https://urcode.link/"
            title={"Generate your code that describes you"}
            source="https://urcode.link/"
          >
            <i class="nes-icon linkedin is-medium"></i>
          </LinkedinShareButton>
        </section>

      </section>
    </section>
  )
}