import React, { useState } from 'react'
import Child from './component/child'
import "./App.css"
// state props
const App = () => {
  let [name , setName] = useState("Arshil")
  let [city , setcity] = useState("Ahmedabad")
  let [power , setPower] = useState("Bilionare")
  let [count ,setCount] = useState(0)
  
  function handle(){
     setName("krrish")
    setName("param")
   
    setcity("Ahmedabad")
    setPower("Poor")
  }
  console.log("render")
  return (
    
   <React.Fragment>
    <p className="name">Name : {name}</p>
    <p className='city'>City : {city} </p>
    <p>Power : {power}</p>
    <button onClick={handle}>Change State</button>



    <h1>Decrement</h1>
    <p>Count :{count}</p>
    <button onClick={()=>{
      setCount(count-1)
    }}>Dec</button>
    <button onClick={()=>{
      setCount(count+1)
    }}> inc</button>
    <Child name ={name} city = {city} power = {power}/>
    </React.Fragment>
  )
}

export default App