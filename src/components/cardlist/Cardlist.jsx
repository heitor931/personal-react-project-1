import React from 'react'
import Card from '../card/Card'
import './Cardlist.scss'

export default  function Cardlist ({data , handleClick}) {
  return (
    <div className='cardlist'>
        {data.map((obj, id) => <Card handleClick={handleClick} src={obj.src} key={id} name={obj.name} />)}
    </div>
  )
}
