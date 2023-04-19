import React, { createContext, useContext, useEffect, useState } from 'react';
import { ContextObj } from './ContParent';

export default function GrandChild() {
 const {color,setColor} = useContext(ContextObj);
 console.log(setColor)

  const newFunc = () => {
    setColor("yellow");
  }
 useEffect(() =>{
  console.log("test")
 // newFunc();
 },[color])
  return (
    <>
    <button onClick={newFunc}>click</button>
     <h1 className="app-name" style={{color:color}}>Hellooooo</h1>     
      <div>GrandChild</div>
    </>
  )
}
