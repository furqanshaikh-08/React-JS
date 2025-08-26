import React, { useState } from 'react'

export default function Stateevent() {
  const [count,setCount]=useState(10)
    return (
    <div>
        <h1>count : {count}</h1>
        <button onMouseMove={()=>setCount(count+5)}>inc 5</button>
        <button onMouseUp={()=>setCount(count+10)}>inc 10</button>
        <button onMouseDown={()=>setCount(count+20)}>inc 20</button>
        <button onMouseOver={()=>setCount(count+50)}>inc 50</button>

    </div>
  )
}
