import Typist from 'react-typist';
import { useRouter } from 'next/router'
import styles from '../sections/header.module.css'

export default function Header() {
  
  let router = useRouter()

  if (router.locale === 'en-US') {
    return (
      <section className={styles.header}>
        <Typist cursor={{show: false}}>
          <h1 className={styles.typing}><span>* </span>
            Your Life
            <Typist.Backspace count={4} delay={800} />
            Autobiography
            <Typist.Backspace count={13} delay={800} />          
            Code
            <Typist.Backspace count={9} delay={800} />
            urcode
          </h1>
        </Typist>
      </section>
    )
  } else if (router.locale === 'tr') {
    return (
      <section className={styles.header}>
        <Typist cursor={{show: false}}>
          <h1 className={styles.typing}><span>* </span>
            Senin Hayatın
            <Typist.Backspace count={7} delay={800} />
            Otobiyografin
            <Typist.Backspace count={13} delay={800} />          
            Kodun
            <Typist.Backspace count={11} delay={800} />
            urcode
          </h1>
        </Typist>
      </section>
    )
  }
  
}