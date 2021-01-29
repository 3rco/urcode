import Link from 'next/link'
import { Text, Center } from "@chakra-ui/react"
import Typist from 'react-typist';

import NavBar from '../components/sections/navbar'
import Layout from '../components/layouts/homeLayout'


export default function Home() {
  return (
    <Layout>
      <NavBar />
      <Center>
        <Typist cursor={{show: false}}>
          <Text fontSize="6xl" color="pink.800">
            Your Life
            <Typist.Backspace count={4} delay={800} />
            Autobiography
            <Typist.Backspace count={13} delay={800} />
            Code
            <Typist.Backspace count={9} delay={800} />
            urcode
          </Text>
        </Typist>
      </Center>

    </Layout>
  )
}
