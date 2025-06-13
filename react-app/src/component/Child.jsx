import React from 'react'

const Child = ({name , city, power}) => {
    
  return (
     <div>
        <p className="name1">name : {name}</p>
        <p className='city1'>city : {city}</p>
        <p>power : {power}</p>

     </div>
  )
}

export default Child