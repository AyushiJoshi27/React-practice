import React, { useContext } from 'react';
import { ContextData } from './ParentCtxt';

export default function Child1Ctxt() {
  const childCtxtObj = useContext(ContextData);
  return (
    <>
      <div style={{margin: "20px 0", color: "darkgray"}}>Child1Ctxt</div>
      <p style={{backgroundColor: childCtxtObj}}>hello: {childCtxtObj}</p>
    </>
  );
};

