import React, {useState, useEffect} from 'react'
import Child from './Child';

function Parent() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount((count) => count + 1);
  }, [count]);

  return (
    <>
      <div><p>Parent</p></div>
      <Child counter={count}/>
    </>
  )
}

export default Parent;