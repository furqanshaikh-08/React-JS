import React from 'react'

export default function MethodChild(props) {
  return (
    <div>
        <h1>Child Component</h1>
      <button onClick={()=>props.Display('Furqan')}>Display</button>
    </div>
  )
}
