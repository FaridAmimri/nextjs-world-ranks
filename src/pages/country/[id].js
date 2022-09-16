/** @format */

import React from 'react'
import Layout from '../../components/layout/Layout'
import styles from './country.module.css'

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`https://restcountries.com/v2/alpha/${params.id}`)

  const country = await res.json()

  return {
    props: {
      country
    }
  }
}

function Country({ country }) {
  console.log(country)
  return (
    <Layout title={country.name}>
      <div className={styles.overview}>
        <picture>
          <img src={country.flag} alt={country.name}></img>
          <h1 className={styles.overview_name}>{country.name}</h1>
          <h4 className={styles.overview_region}>{country.region}</h4>
        </picture>

        <div className={styles.overview_statistic}>
          <div className={styles.overview_population}>
            <div className={styles.overview_value}>{country.population}</div>
            <div className={styles.overview_label}>Population</div>
          </div>

          <div className={styles.overview_area}>
            <div className={styles.overview_value}>{country.area}</div>
            <div className={styles.overview_label}>Area</div>
          </div>
        </div>
      </div>

      <div className={styles.details}>
        <h4 className={styles.details_heading}>Details</h4>

        <div className={styles.details_content}>
          <div className={styles.details_label}>Capital</div>
          <div className={styles.details_value}>{country.capital}</div>
        </div>

        <div className={styles.details_content}>
          <div className={styles.details_label}>Languages</div>
          <div className={styles.details_value}>
            {country.languages.map(({ name }) => name)}
          </div>
        </div>

        <div className={styles.details_content}>
          <div className={styles.details_label}>Currencies</div>
          <div className={styles.details_value}>
            {country.currencies.map(({ name }) => name)}
          </div>
        </div>

        <div className={styles.details_content}>
          <div className={styles.details_label}>Native name</div>
          <div className={styles.details_value}>{country.nativeName}</div>
        </div>

        <div className={styles.details_content}>
          <div className={styles.details_label}>Gini</div>
          <div className={styles.details_value}>{country.gini} %</div>
        </div>

        <div className={styles.details_content}>
          <div className={styles.details_label}>Subregion</div>
          <div className={styles.details_value}>{country.subregion}</div>
        </div>
      </div>
    </Layout>
  )
}

export default Country
