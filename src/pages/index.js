/** @format */

import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import styles from '../styles/Home.module.css'
import SearchInput from '../components/searchInput/SearchInput'
import CountriesTable from '../components/countriesTable/CountriesTable'

// Get the data at the build time (will only be updated when we rebuild the project )
export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v2/all')

  const countries = await res.json()

  return {
    props: {
      countries
    }
  }
}

export default function Home({ countries }) {
  const [keyword, setKeyword] = useState('')

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(keyword) || country.region.toLowerCase().includes(keyword)
  )

  function handleInputChange(e) {
    e.preventDefault()
    setKeyword(e.target.value.toLowerCase())
  }

  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>

      <SearchInput
        placeholder='Filter by Name or Region'
        onChange={handleInputChange}
      />

      <CountriesTable countries={filteredCountries} />
    </Layout>
  )
}
