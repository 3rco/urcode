import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/layouts/docsLayout'
import NavBar from '../components/sections/navbar'
import Footer from '../components/sections/footer'
import { getPostData } from '../lib/docs'
import styles from './docs.module.css'


export async function getStaticProps(params) {
  const postData = await getPostData(params.locale)

  return {
    props: {
      postData
    }
  }
}

export default function Docs({ postData }) {
  let { t } = useTranslation() 

  return (
    <Layout>
      <NavBar />
      <section className={styles.info}>
        <h1>
          <span style={{color: "#1A365D"}}>* </span> 
          urcode
        </h1>
        <p>
          <span style={{fontWeight: 'bold', textDecoration: 'underline'}}>{t("docs:Last Update")}</span>
          <span> </span>{postData.date}
        </p>
      </section>
      
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

      <Footer />
    </Layout>
  )
}