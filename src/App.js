import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'; 
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

export default connect(mapStateToProps, mapDispatchToProps)(App);*/

import React from 'react';
import { createStore, combineReducers } from 'react';
import { Provider } from 'react-redux';
import ColorCompo from './components/ColorCompo';
import BgCompo from './components/BgCompo';
import colorReducer from './Reducers/ColorReducer';
import bgReducer from './Reducers/BgReducer';

const rootReducer = combineReducers({
  color: colorReducer,
  background: bgReducer
});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        <ColorCompo/>
        <BgCompo/>
      </div>
    </Provider>
  )
}

export default App;