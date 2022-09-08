/** @format */

import React from 'react'
import styles from './SearchInput.module.css'
import { Input } from '@nextui-org/react'
import { FaSistrix } from 'react-icons/fa'

export default function SearchInput({ ...rest }) {
  return (
    <Input
      id='input'
      className={styles.input}
      placeholder='Filter by Name, Region or SubRegion'
      aria-label='input-search'
      clearable
      bordered
      color='success'
      size='xl'
      fullWidth
      contentLeft={<FaSistrix />}
      {...rest}
    />
  )
}
