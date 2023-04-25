import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'; 
import { StartAction } from './actions/StartAction';
import { StopAction } from './actions/StopAction';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} 
          className= {
            "App-logo" + (this.props.rotating ? "":" App logo-pause")
          }
          onClick = {
            this.props.rotating ? 
              this.props.StopAction : this.props.StartAction
          }
          alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
  StopAction: () => dispatch(StopAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
