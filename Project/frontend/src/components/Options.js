import React, { useState, useMemo, useEffect } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function Options({handleCountryChange}) {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])
 
  const changeHandler = value => {
    setValue(value);
    handleCountryChange(value);
  }

  return <Select options={options} value={value} onChange={changeHandler} />
}

export default Options