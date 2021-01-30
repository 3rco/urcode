import Link from 'next/link'
import Image from 'next/image'
import Typist from 'react-typist';

import styles from '../sections/header.module.css'

export default function Header() {
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
}