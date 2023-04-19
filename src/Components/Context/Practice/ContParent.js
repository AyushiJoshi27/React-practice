import React, { useState, createContext } from 'react';
import Child from './Child';
import GrandChild from './GrandChild';

const ContextObj = createContext();

export default function ContParent() {
  const [color, setColor] = useState('red');
  return (
    <>
      <div>Parent</div>
      <br />
      <div>
        <ContextObj.Provider value={{color, setColor}} >
          <GrandChild/>
        </ContextObj.Provider>
      </div>
    </>
  )
}

export {ContextObj};
