import React from 'react'

export default function Demo1({name}) {
 if(name==='Alex')
 {
    throw new Error('not a hero')
 }
    return (
    <div>{name}</div>
  )
}
