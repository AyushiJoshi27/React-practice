import React, {useState, useEffect} from 'react';

export default function Child(props) {
  const [count, setCount] = useState(1);
  const [times, setTimes] = useState(1);
  
  useEffect(() => {
    setCount((count) => count + 1);
  }, [count]);

  return (
    <>
      <div>Child</div>
      <button onClick={() => setTimes((times) => times + 1)}></button>
    </>
  )
}
