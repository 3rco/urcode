import Link from 'next/link'
import Image from 'next/image'
import Typist from 'react-typist';

import styles from '../sections/footer.module.css'

export default function Footer() {
  return (
    <section className={styles.footer}>
      <a href="https://github.com/3rco/urcode" target="_blank">
        <h1><i className="fab fa-github"></i> GitHub</h1>
      </a>
      <a style={{placeSelf: "center"}} href="http://www.wtfpl.net/txt/copying/" target="_blank">
        <Image
          src="/img/wtfpl-badge-1.png"
          alt="Do What the Fuck You Want to Public License"
          width={88}
          height={31}
        />
      </a> 
      <a href="mailto:hi@urcode.link">
        <i class="fas fa-envelope"></i> hi[at]urcode[dot]link
      </a>
    </section>
  )
}