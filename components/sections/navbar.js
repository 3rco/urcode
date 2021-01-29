import Link from 'next/link'
import Image from 'next/image'
import { Text, Center, Flex, Box, Container } from "@chakra-ui/react"

export default function NavBar() {
  return (
    <Container mt="3" mb="6">
      <Flex flexDirection="row" borderBottomStyle="solid" borderBottomColor="pink.900" borderBottomWidth="2px" justifyContent="space-around">
        <Box p="2" bg="white" m="1" marginBlock="auto">
          <Link href="/doc">
            <a>
              <Text fontSize="lg" color="pink.900">Docs</Text>
            </a>
          </Link>
        </Box>
       
          <Link href="/">
            <a>
            <Image src="/img/ef5c8b9d-93ee-4dbd-9f53-1eeb149ad6b6.png" alt="me" width="100" height="64" />
            </a>  
          </Link>
        <Box p="2" bg="white" m="1" marginBlock="auto">
          <Link href="/user">
            <a>
              <Text fontSize="lg" color="pink.900">Users</Text>
            </a>
          </Link>
        </Box>
      </Flex>
    </Container>
  )
}
  