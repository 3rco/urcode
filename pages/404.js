import Link from 'next/link'
import { Text } from "@chakra-ui/react"


export default function NotFound() {
  return (
     <div>
      <Text fontSize="6xl" color="pink.800">Oh no! Page not found.</Text>

      <Link href="/">
        <a>
            <Text fontSize="lg" color="pink.500">Home</Text>
        </a>
      </Link>
     </div>
  )
}
