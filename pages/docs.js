import Layout from '../components/layouts/docsLayout'
import NavBar from '../components/sections/navbar'
import Footer from '../components/sections/footer'
import Interest from '../components/sections/docs/interest'
import Appearance from '../components/sections/docs/appearance'
import FieldOfInterest from '../components/sections/docs/fieldOfInterest'
import Lifestyle from '../components/sections/docs/lifestyle'
import Computer from '../components/sections/docs/computer'
import Entertainment from '../components/sections/docs/entertainment'
import Politics from '../components/sections/docs/politics'
import Contribution from '../components/sections/docs/contribution'
import styles from './docs.module.css'


export default function Docs() {

  return (
    <Layout>
      <NavBar />
        <section className={styles.content}>
          <Interest />
          <Appearance />
          <FieldOfInterest />
          <Lifestyle />
          <Computer />
          <Politics />
          <Entertainment />
          <Contribution />
        </section>
      <Footer />
    </Layout>
  )
}