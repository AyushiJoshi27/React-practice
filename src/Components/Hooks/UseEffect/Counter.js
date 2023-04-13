
//Effect Cleanup
/*
import { useState, useEffect } from "react";

export default function CountEvents() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

import { useState, useEffect } from "react";

export default function CountEvents() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
    console.log("hii");
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}
*/
import React, { useState, useEffect } from 'react';
export default function CountEvents() {
  const arr = [
    {
      "id": 0,
      "a": "button1"
    },
    {
      "id": 1,
      "a": "button2"
    },
    {
      'id': 2,
      "a": "button3"
    },
    {
      'id': 3,
      "a": "button4"
    }
  ];

  const [hoveredButtonId, setHoveredButtonId] = useState('');

  useEffect(() => {
    const HandleMouseEnter = (e) => {
      setHoveredButtonId(Number(e.target.id));
      //console.log(e.target.id);
    }

    const HandleMouseLeave = (e) => {
      setHoveredButtonId(Number(null));
      //console.log(e.target.id + 1);
    }

    const buttons = document.querySelectorAll('button');

    buttons.forEach((buttons) => {
      buttons.addEventListener("mouseenter", HandleMouseEnter);
      buttons.addEventListener("mouseleave", HandleMouseLeave);
    });

    
  }, []);

  return (
    <div>
      {arr.map((item) => (
        <div key={item.id}>
        <button
          id={item.id}
          key={item.id}
          style={{ boxShadow: hoveredButtonId === item.id ?  "1px 2px 5px 0px blue" : "1px 2px 5px 0px black"}}
        >{item.a}</button>
        <p className={item.id}>{hoveredButtonId === item.id ? "HEyy" : "false"} {hoveredButtonId + "HEyy" + item.id}</p>
        </div>
      ))}
    </div>
  )
}