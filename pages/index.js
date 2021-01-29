import Link from 'next/link'
import { Text } from "@chakra-ui/react"
import Layout from '../components/layouts/homeLayout'


export default function Home() {
  return (
    <Layout>     
      <Text fontSize="6xl" color="pink.800">urcode</Text>

      <Link href="/user">
        <a>
          <Text fontSize="lg" color="pink.500">users</Text>
        </a>
      </Link>

      <Link href="/doc">
        <a>
          <Text fontSize="lg" color="pink.500">docs</Text>
        </a>
      </Link>

    </Layout>
  )
}
