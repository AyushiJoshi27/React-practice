import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'; 
import { StartAction } from './actions/StartAction';
import { StopAction } from './actions/StopAction';

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
          <button onClick={ () =>
            props.rotating ? 
            props.StopAction() : props.StartAction()
          }>Handler</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);