/*const Home = () => {
      return <h1 style={{ textAlign: "center" }}>Home page</h1>;

    };
    export default Home;

    () => setCount((c) => c + 1)

    function ButtonClick() {

        setCount(function(c) {
            return c+1;
        }) 
    }
    
    (c) => c+1

    function increment(c) {
        return c+1;
    }

    () => count * 2*/

    import React, { useEffect, useState } from 'react';
    function Home() {
       const [count, setCount] = useState(0)
       const [a, setA] = useState(0);
       useEffect(()=>{
        console.log(count, a);
        alert("count: " + count);
        //setA(count);
        //document.title =“count is”+count;
       }, [count])
      return (
        <div>
          <h1>Life cycle</h1>
          <button onClick={()=>{setCount((count) => count + 1 )}}>update {count}</button>
          <h3>{count}</h3>
          <button onClick={() => {setA((a) => a+1)}}>{a}</button>
        </div>
      )
    }
    export default Home;