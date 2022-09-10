/** @format */

import React, { useState } from 'react'
import styles from './CountriesTable.module.css'
import { Button } from '@nextui-org/react'
import { FaAngleDown } from 'react-icons/fa'
import { FaAngleUp } from 'react-icons/fa'

function orderBy(countries, value, direction) {
  if (direction === 'asc') {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1))
  }

  if (direction === 'desc') {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1))
  }

  return countries
}

function SortArrow({ direction }) {
  if (!direction) {
    return <></>
  }

  if (direction === 'desc') {
    return (
      <div className={styles.heading_arrow}>
        <FaAngleDown />
      </div>
    )
  } else {
    return (
      <div className={styles.heading_arrow}>
        <FaAngleUp />
      </div>
    )
  }
}

function CountriesTable({ countries }) {
  const [direction, setDirection] = useState(null)
  const [value, setValue] = useState()

  const orderedCountries = orderBy(countries, value, direction)

  function switchDirection() {
    if (!direction) {
      setDirection('desc')
    } else if (direction === 'desc') {
      setDirection('asc')
    } else {
      setDirection(null)
    }
  }

  function sortAscOrDesc(value) {
    switchDirection()
    setValue(value)
  }

  return (
    <div>
      <div className={styles.heading}>
        <Button light className={styles.heading_name}>
          <span>Name</span>
        </Button>

        <Button
          light
          className={styles.heading_population}
          onPress={() => sortAscOrDesc('population')}
        >
          <span>Population</span>
          <SortArrow direction={direction} />
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
