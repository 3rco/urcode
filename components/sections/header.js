import Typist from 'react-typist';
import { useRouter } from 'next/router'
import Image from 'next/image'
import useDarkMode from 'use-dark-mode';
import styles from '../sections/header.module.css'

export default function Header() {
  let router = useRouter()
  const darkMode = useDarkMode(false);

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
        <section>
          {
            darkMode.value ?
              <a className={styles.smButton} onClick={darkMode.disable}>
                <Image
                    src="/img/sun.png"
                    alt="light"
                    width={48}
                    height={48}                    
                />
              </a>
              : 
              <a className={styles.smButton} onClick={darkMode.enable}>
                <Image
                    src="/img/moon.png"
                    alt="light"
                    width={48}
                    height={48}                    
                />
              </a>
          }
        </section>
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
        <section>
          {
            darkMode.value ?
              <a className={styles.smButton} onClick={darkMode.disable}>
                <Image
                    src="/img/sun.png"
                    alt="light"
                    width={48}
                    height={48}                    
                />
              </a>
              : 
              <a className={styles.smButton} onClick={darkMode.enable}>
                <Image
                    src="/img/moon.png"
                    alt="light"
                    width={48}
                    height={48}                    
                />
              </a>
          }
        </section>
      </section>
    )
  }
  
}