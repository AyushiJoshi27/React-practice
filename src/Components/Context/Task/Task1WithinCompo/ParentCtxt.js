import React, {createContext} from 'react';
import Child1Ctxt from './Child1Ctxt';
import Child2Ctxt from './Child2Ctxt';
export let ContextData = createContext();

export default function ParentCtxt() {
  return (
    <>
      <div style={{margin: "10px 0"}}>ParentCtxt</div>
      <ContextData.Provider value='#0c7b7b' >
        <Child1Ctxt />
        <Child2Ctxt />
      </ContextData.Provider>
    </>
  )
}
