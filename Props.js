import React from 'react'

function Props(props) {
  return (
  
    <div>
      <h2 style={{color:"red", fontFamily:"serif"}}>MY name is {props.name}</h2> 
      <h2 style={{backgroundColor:"yellow", fontSize:"50px"}}>Age is {props.age}</h2> 
      <h2 style={{background:"linear-gradient(90deg,pink,cyan)"}}>Roll no is {props.roll}</h2> 
    </div>
  )
}

export default Props