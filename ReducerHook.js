import React, { useReducer } from 'react'
const reducer=(value,action)=>
    {
        switch(action)
        {
               case 'inc':return value+100;
               case 'dec':return value-10;
               case 'res':return value=10;
               default:return initialState;
        }
    }
const initialState=1000;
export default function ReducerHook() {
const[value,dispatch]=useReducer(reducer,initialState);
    return (
    <div>
        <h1>Value : {value}</h1>
        <button onClick={()=>dispatch('inc')}>increment</button>
        <button onClick={()=>dispatch('dec')}>decrement</button>
        <button onClick={()=>dispatch('res')}>reset</button>
    </div>
  )
}
