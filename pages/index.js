import Layout from '../components/layouts/homeLayout'
import NavBar from '../components/sections/navbar'
import Header from '../components/sections/header'
import GettingStarted from '../components/sections/gettingStarted'
import Footer from '../components/sections/footer'


export default function Home() {
  return (
    <Layout>
      <NavBar />
      <Header />
      <GettingStarted />
      <Footer />
    </Layout>
  )
}
