import React, { useEffect, useState } from 'react'

export default function New1() {
    const[count,setCount]=useState(10);
    useEffect(
        ()=>{
            document.title=`count :${count}`
        }
    )
   const handleInputChange=(event)=>
    {
        setCount(event.target.value);
    }
    return (
    <div>
        <p>Count= {count}</p>
        <form>
            <input type="number" value={count} onChange={handleInputChange}></input>
        </form>
        <button onClick={()=>setCount(count+10)}>increment</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}
