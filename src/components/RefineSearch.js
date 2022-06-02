import React, { useState } from 'react'

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function RefineSearch({ getParams }) {
  const [params, setParams] = useState('')

  const highProtein = () => {
    setParams('&diet=high-protein')
    console.log(params)
  }

  return (
    <div className="filter">
        <p>Filter</p>
        <KeyboardArrowDownIcon className="filter__icon" />
        <button onClick={highProtein}>High Protein</button>
        <button onClick={() => getParams(params)}>Search</button>
    </div>
  )
}

export default RefineSearch