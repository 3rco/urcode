import Link from 'next/link'
import Image from 'next/image'
import styles from '../sections/footer.module.css'

export default function Footer() {
  return (
    <section className={styles.footer}>
      <a href="https://github.com/3rco/urcode" target="_blank">
       <i className={"nes-icon github is-medium"} ></i>
      </a>
      <a style={{placeSelf: "center"}} href="http://www.wtfpl.net/txt/copying/" target="_blank">
        <Image
          src="/img/wtfpl-badge-1.png"
          alt="Do What the Fuck You Want to Public License"
          width={88}
          height={48}          
        />
      </a> 
      <a href="mailto:hi@urcode.link" style={{marginTop:20}}>
      <i className={"nes-icon gmail is-medium"}></i>
      </a>
    </section>
  )
}