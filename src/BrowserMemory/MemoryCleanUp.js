import React, {useState, useEffect} from 'react'

export default function MemoryCleanUp() {

    const [count, setCount] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  

  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}


/*

const element = document.getElementById('button');
const onClick = () => alert('hi');

element.addEventListener('click', onClick);

element.removeEventListener('click', onClick);
element.parentNode.removeChild(element);

*/