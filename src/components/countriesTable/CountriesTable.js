/** @format */

import React from 'react'
import styles from './CountriesTable.module.css'
import { Button } from '@nextui-org/react'

function CountriesTable({ countries }) {
  return (
    <div>
      <div className={styles.heading}>
        <Button light className={styles.heading_name}>
          <span>Name</span>
        </Button>

        <Button light className={styles.heading_population}>
          <span>Population</span>
        </Button>
      </div>

      {countries.map((country) => (
        <div className={styles.row} key={country.cca2}>
          <div className={styles.name}>{country.name.common}</div>
          <div className={styles.population}>{country.population}</div>
        </div>
      ))}
    </div>
  )
}

export default CountriesTable
