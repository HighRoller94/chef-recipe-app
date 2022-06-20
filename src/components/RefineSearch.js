import React, { useState } from 'react'

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function RefineSearch({ getParams }) {
  const [params, setParams] = useState([])
  const [show, setShow] = useState(false);

  const openAdvancedSearch = () => {

  }
  
  const highProtein = () => {
    setParams('&diet=high-protein')
    console.log(params)
  }
  
  const lowFat = () => {
    setParams('&diet=low-fat')
    console.log(params)
  }

  return (
    <div className="filter">
      <div className="filter__show" id="filter">
        <p>Filter</p>
        <KeyboardArrowDownIcon className="filter__icon" />
      </div>
        <div className="filter__options">
          <button onClick={lowFat}>Low Fat</button>
          <button onClick={highProtein}>High Protein</button>
          <button onClick={() => getParams(params)}>Search</button>
        </div>
    </div>
  )
}

export default RefineSearch