import React from 'react'
import './SearchBox.scss'

function SearchBox(props) {
  return (
    <div className='searchit'>
        <input type="search" name="search" id="search" placeholder='search things...' onChange={props.handleChange} />

    </div>
  )
}

export default SearchBox