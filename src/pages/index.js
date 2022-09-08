/** @format */

import Layout from '../components/layout/Layout'
import styles from '../styles/Home.module.css'
import SearchInput from '../components/searchInput/SearchInput'
import CountriesTable from '../components/countriesTable/CountriesTable'

// Get the data at the build time (will only be updated when we rebuild the project )
export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all')
  const countries = await res.json()

  return {
    props: {
      countries
    }
  }
}

export default function Home({ countries }) {
  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>

      <SearchInput />

      <CountriesTable countries={countries} />
    </Layout>
  )
}
