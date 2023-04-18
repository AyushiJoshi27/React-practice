import React, {useState, useEffect} from 'react'
import Child from './Child';

function Parent() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    //setCount((count) => count + 1);
    console.log("parent-useEffect");  
  }, []);

  //setCount((count) => count + 1);
  console.log("parent")

  return (
    <>
      <div><p>Parent</p></div>
      <Child/>
      <p>value: {count}</p>
      <button onClick={() => setCount((count) => count + 1) }>Parent: {count}</button>
    </>
  )
}

export default Parent;