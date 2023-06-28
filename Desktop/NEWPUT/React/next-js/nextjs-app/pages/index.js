import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>New compo</div>
      <div>
        <li>
          <Link href='/clients'>clients</Link>
        </li>
        <li>
          <Link href='/blog'>blog</Link>
        </li>
        <li>
        <Link href='/portfolio'>portfolio</Link>
        </li>
      </div>
    </>
  )
}
