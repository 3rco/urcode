import Link from 'next/link'

import styles from '../sections/gettingStarted.module.css'

export default function gettingStarted() {
  return (
    <section >
        <h2 className={styles.h2}>Getting Started</h2>

        <h3 className={styles.h3}>Our Goal</h3>
        <p className={styles.p}>
          Our goal is to obtain a piece of code that briefly introduce the author.
          We have a generator and parser for this.
          In addition, we want the generated codes to be published on a page.
        </p>

        <h3 className={styles.h3}>What is urcode?</h3>
        <p className={styles.p}>
            The urcode consists of several categories. 
            Each category is labeled with a letter and some qualifiers.
            Go through each category and determine which set of qualifiers best describes you in that category.
            By selecting the right qualifiers and submitting this form, you are able to construct your overall urcode.
        </p>
        <p className={styles.p}>
            Some of the qualifiers will very probably not match with you exactly.
            It is impossible to cover all possibilities in each category. 
            Simply choose that qualifier that most closely matches you. 
            Each description of each qualifier describes the wide range of activities that apply, so as long as you match with one, you can probably use that qualifier.
        </p>
        <p className={styles.inspiration}>
            Our inspiration is <a href="https://www.geekcode.xyz/" target="_blank">geek code</a>.
        </p>

        <h3 className={styles.h3}>So how to get started?</h3>
        <p className={styles.p}>
          You can get started quickly by reviewing the <Link href="/docs"><a>document</a></Link> section. 
          Also, in the document section, you can find information about how you can reach us or how you can contribute.
        </p>
    </section>
  )
}