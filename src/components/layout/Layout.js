/** @format */

import React from 'react'
import Head from 'next/head'
import styles from './Layout.module.css'
import Logo from './Logo.svg'
import Image from 'next/image'

function Layout({ children, title = 'World Ranks' }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className={styles.header}>
       <Image src={Logo} alt='logo' />
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>www.faridamimri.com</footer>
    </div>
  )
}

export default Layout
