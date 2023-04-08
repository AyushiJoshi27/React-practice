import React, { useState, useEffect, useLayoutEffect } from 'react';

const EventLayout = () => {
  const [number, setNumber] = useState(0);
  
  useEffect(() => {
    if (number === 0) {
      setNumber(5 + Math.random() * 100);
      console.log(number);
    }
  }, [number]);
  /* 
  useLayoutEffect(() => {
    if (number === 0) {
      setNumber(5 + Math.random() * 100);
      //console.log(number);
    }
  }, [number]);
  */
  console.log(number);

  return (
    <>
      <h3>{number}</h3>
      <button onClick={() => setNumber(0)}>Test</button>
      {/** runs only once
      <button onClick={() => setNumber(number)}>Test</button>**/}
    </>
  )
}

export default EventLayout;