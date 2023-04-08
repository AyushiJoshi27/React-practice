/*import React, { useRef } from "react";

const CustomTextInput = () => {
  const textInput = useRef();

  function focusTextInput() { 
    textInput.current.focus();
    console.log("UseRef");
 };

  return (
    <>
      <input type="text" ref={textInput} />
      <button onClick={focusTextInput}>Focus the text input</button>
    </>
  );
}

export default CustomTextInput;
import React, { useRef, useEffect } from "react";

const Timer = () => {
  const intervalRef = useRef();

  useEffect(() => {
    const id = setInterval(() => {
      console.log("A second has passed");
    }, 1000);
    
    // We need the interval id to be accessible from the whole component.
    // If we stored the id in a state variable, the component would be re-rendered
    // after the state update so a new interval will be created (this effect is triggered
    // after every re-render) leading us to the infinite loop hell.
    intervalRef.current = id;
    
    return () => clearInterval(intervalRef.current);
  });

  const handleCancel = () => clearInterval(intervalRef.current);
  
  return (
    <>
        <h3>Re-rendering</h3>
    </>
  );
}

export default Timer;

//updating a ref value 

//does not updates the current value correctly but gives '[obj obj]'
//TO achieve the effect, use useEffect
import React, { useEffect, useRef } from "react";

const RenderCounter = () => {
  const counter = useRef(2);

  //counter.current = counter.current + 1;

  console.log("Current value:" + {counter})
  
  return (
    <>
    <h1> UseRef</h1>
    <h3>{`COunter has been rendered ${counter} times`}</h3>
    </>
  );
};

export default RenderCounter;*/
import React, {useRef, useEffect} from "react";
function UseRef() {
    const name = useRef("Ayushi");
  
    useEffect(() => {
      setTimeout(() => {
        name.current = "Ayu";
        console.log(name);
      }, 2000);
    });
  
    return <div>{name.current}</div>;
  }
export default UseRef;