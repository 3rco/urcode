import Link from 'next/link'


export default function NotFound() {
  return (
     <div>
      <h1 >Oh no! Page not found.</h1>

      <Link href="/">
        <a>
            <h2>Home</h2>
        </a>
      </Link>
     </div>
  )
}
