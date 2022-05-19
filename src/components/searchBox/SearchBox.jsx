import React from 'react'
import './SearchBox.scss'

function SearchBox(props) {
  return (
    <div className='searchit'>
        <input type="search" name="search" id="search" placeholder='search things...' />

    </div>
  )
}

export default SearchBox