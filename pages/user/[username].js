import { users } from '../../data/users'
import NavBar from '../../components/sections/navbar'
import Footer from '../../components/sections/footer'
import Layout from '../../components/layouts/usersLayout'
import styles from './user.module.css'

export const getStaticProps = async ({ params }) => {
  const user = users.filter(u => u.username === params.username)

  return {
    props: {
      user: user[0]
    }
  }
}

export const getStaticPaths = async () => {
  const paths = users.map(user => ({
    params: { username: user.username },
  }))

  return { paths, fallback: false }
}

export default function Users({ user }) {
  return (
    <Layout>
      <NavBar />
      <section className={styles.content}>
        <div className="nes-container with-title is-centered">
          <p className="title">{user.username}</p>
          <p>{user.urcode}</p>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}