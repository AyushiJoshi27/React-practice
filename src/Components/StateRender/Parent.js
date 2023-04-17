import React, {useState, useEffect} from 'react'

function Parent() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount((count) => count + 1);
  }, [count]);

  return (
    <>
      <div>Parent</div>
      <p>Count: {count}</p>
    </>
  )
}

export default Parent;