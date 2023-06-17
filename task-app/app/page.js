"use client"
import React,{useReducer} from 'react'
import styles from './page.module.css'
const page = () => {
  const initialState = 0;
  const reducer = (state,action)=>{
    if(state.action === "INCREMENT"){
      return state + 1;
    }else if(state.action === "DECREMENT"){
      return state - 1;
    }
    return state;
  }
  const[state,dispatch] = useReducer(reducer,initialState);
  return (
    <>
      <p>{state}</p>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>

    
      
    </>
  )
}

export default page
