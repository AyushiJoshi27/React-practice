//import logo from './logo.svg';
import './App.css';
//import { connect } from 'react-redux';
//import { StartAction } from './actions/StartAction';
//import { StopAction } from './actions/StopAction';
/*import rotateAction from './actions/rotateAction';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} 
          className= {
            "App-logo" + (props.rotating ? "":" logo-pause")
          }
          alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <button 
            onClick={() => props.rotateAction(!props.rotating)}>
            Handler</button>
          onClick={ () =>
            props.rotating ? 
            props.StopAction() : props.StartAction()
          }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  StartAction: () => dispatch(StartAction),
  StopAction: () => {
    console.log("dispatch");
    dispatch(StopAction)
    }
});
const mapDispatchToProps = dispatch => ({
  rotateAction: (payload) => dispatch(rotateAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ColorComponent from './components/ColorComponent';
import BackgroundComponent from './components/BackgroundComponent';
import colorReducer from './reducers/colorReducer';
import backgroundReducer from './reducers/backgroundReducer';

const rootReducer = combineReducers({
  color: colorReducer,
  background: backgroundReducer
});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        <ColorComponent />
        <BackgroundComponent />
      </div>
    </Provider>
  );
}

export default App;
*/
import React from "react";
import Counter from "./Counter";
import User from './User';
import ProductStore from './ProductStore/ProductStore';

const App = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Counter />
        <User />
      </div>
      <ProductStore />
    </>
  );
};

export default App;

/*import React from 'react'
import Increment from './increment';
import Decrement from './decrement';

export default function App() {
  return (
    <div>
      <Increment/>
      <Decrement/>
    </div>
  )
}
*/