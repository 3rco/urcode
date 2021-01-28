import Link from 'next/link'
import Layout from '../components/homeLayout'

export default function Home() {
  return (
    <Layout>
     
      <h1>urcode</h1>

      <Link href="/user">
        <a>users</a>
      </Link>

      <Link href="/doc">
        <a>docs</a>
      </Link>

    </Layout>
  )
}
