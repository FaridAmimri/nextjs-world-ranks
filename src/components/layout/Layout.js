/** @format */

import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from './Layout.module.css'
import Logo from './Logo.svg'
import Image from 'next/image'
import { FaAdjust } from 'react-icons/fa'

function Layout({ children, title = 'World Ranks' }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      localStorage.getItem('theme')
    )
    setTheme(localStorage.getItem('theme'))
  }, [])

  function switchTheme() {
    if (theme === 'light') {
      saveTheme('dark')
    } else {
      saveTheme('light')
    }
  }

  function saveTheme(theme) {
    setTheme(theme)
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className={styles.header}>
        <Image src={Logo} alt='logo' />
        <button className={styles.themeSwitcher} onClick={switchTheme}>
          <FaAdjust />
        </button>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>www.faridamimri.com</footer>
    </div>
  )
}

export default Layout
