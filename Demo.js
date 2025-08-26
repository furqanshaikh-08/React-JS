import React from 'react'

function Demo({name}) {
  if(name==='Alex')
    {
      throw new Error ('not valid')
    }
    return (
    <div>{name}</div>
  )
}
export default Demo;