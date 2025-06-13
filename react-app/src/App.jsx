import React, { useState } from 'react'
import Child from './component/child'
import "./App.css"
// state props
const App = () => {
  let [name , setName] = useState("Arshil")
  let [city , setcity] = useState("Ahmedabad")
  let [power , setPower] = useState("Bilionare")
  
  function handle(){
     setName("krrish")
    setName("param")
   
    setcity("Ahmedabad")
    setPower("Poor")
  }
  return (
    
   <React.Fragment>
    <p className="name">Name : {name}</p>
    <p className='city'>City : {city} </p>
    <p>Power : {power}</p>
    <button onClick={handle}>Change State</button>
    <Child name ={name} city = {city} power = {power}/>
    </React.Fragment>
  )
}

export default App