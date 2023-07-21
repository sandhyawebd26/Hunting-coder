import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from "./Homepage"

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
      <Home />
  )
}
