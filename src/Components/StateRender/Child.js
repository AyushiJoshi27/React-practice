import React, {useState} from 'react';

export default function Child() {
  const [times, setTimes] = useState(1);
  console.log("outer-child: ")
  return (
    <>
      <div>Child</div>
      <button onClick={() => setTimes((c) => c + 1)}>Buuton: {times}</button>

    </>
  )
}
