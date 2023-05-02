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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Counter from "./Counter";
import User from './User';
import ProductStore from './ProductStore/ProductStore';
import GoToCart from './ProductStore/CartCompo';
import Counter from './StateMutation/Counter';


const App = () => {
  return (
    <>
    {/*<Counter />*/}
    <Router>
      <Routes>
        <Route path='/' element={ <ProductStore /> } />
        <Route path='counter' element={ <Counter/> }></Route>
        <Route path='go-to-cart' element={ < GoToCart /> }></Route>
      </Routes>
    </Router>
    </>
  );
};

export default App;