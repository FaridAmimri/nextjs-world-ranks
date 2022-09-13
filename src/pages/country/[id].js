/** @format */

import React from 'react'

const Country = ({ country }) => {
  console.log(country)
  return <div>Country</div>
}

export default Country

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`https://restcountries.com/v3/ccn3/${params.id}`)

  const country = await res.json()
  
  return {
    props: {
      country
    }
  }
}