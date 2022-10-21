import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <main className={styles.content}>{children}</main>
      <Footer />
    </>
  )
}