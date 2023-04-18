import React, {useState} from 'react';

export default function Child({counter}) {
  const [times, setTimes] = useState(1);
  
  return (
    <>
      <div>Child</div>
      <button onClick={() => setTimes((c) => c + 1)}>{times}</button>
      <p>{counter}</p>
    </>
  )
}
