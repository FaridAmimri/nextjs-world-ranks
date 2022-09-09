/** @format */

import React from 'react'
import styles from './CountriesTable.module.css'
import { Button } from '@nextui-org/react'
import { FaAngleDown } from 'react-icons/fa'

function orderBy(countries, direction) {
  if (direction === 'asc') {
    return [...countries].sort((a, b) => (a.population > b.population ? 1 : -1))
  }

  if (direction === 'desc') {
    return [...countries].sort((a, b) => (a.population > b.population ? -1 : 1))
  }

  return countries
}

function CountriesTable({ countries }) {
  const orderedCountries = orderBy(countries, 'desc')

  return (
    <div>
      <div className={styles.heading}>
        <Button light className={styles.heading_name}>
          <span>Name</span>
          <div className={styles.heading_arrow}>
            <FaAngleDown />
          </div>
        </Button>

        <Button light className={styles.heading_population}>
          <span>Population</span>
          <div className={styles.heading_arrow}>
            <FaAngleDown />
          </div>
        </Button>
      </div>

      {orderedCountries.map((country) => (
        <div className={styles.row} key={country.cca2}>
          <div className={styles.name}>{country.name.common}</div>
          <div className={styles.population}>{country.population}</div>
        </div>
      ))}
    </div>
  )
}

export default CountriesTable
