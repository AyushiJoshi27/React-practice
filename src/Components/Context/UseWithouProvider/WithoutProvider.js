import { createContext, useContext } from "react";

const Context = createContext( "Default Value" );

function Child1() {
  const context = useContext(Context);
  return <h2>Child1: {context}</h2>;
}

function Child2() {
  const context = useContext(Context);
  return <h2>Child2: {context}</h2>;
}

export default function WithoutProvider() {

  return (
    <>
      <Context.Provider value={ "Initial Value" }>
        <Child1 /> {/* Child inside Provider will get "Initial Value" */}
      </Context.Provider>
        <Child2 /> {/* Child outside Provider will get "Default Value" */}
    </>
  );
}