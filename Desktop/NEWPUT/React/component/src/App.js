import './App.css';
//import Tables from './compo/tables';
//import Form from './compo/Form';
//import propTypes from 'prop-types';
//import React, { Component } from 'react';  
import React from 'react';
//import * as ReactDOM from 'react-dom/client';
/*
class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello'
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.message} {this.props.name}!</p>
      </div>
    );
  }
}
export default Greeting;

function App() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            Column
          </div>
          <div className="col">
            Column
          </div>
          <div className="col">
            Column
          </div>
        </div>
      </div>
      <Tables site="WebSite"/>
      <Tables jack="Joe"/>
      <Form heading="Enter the text here"/>
      <h1>Class compo</h1>
      class Welcome extends React.Component {
        render() {
          return <h1>Hello, {this.props.name}</h1>;
        }
      }

    </>
  );
}
*/
/*
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

export default Car;

class HelloWorld extends React.Component {
   render() {
      return (
         <div>
            <p>Hello World!</p>
         </div>
      )
   }
}
export default HelloWorld;

//Pure component
class PercentageStat extends React.PureComponent {

  render() {
    const { label, score = 20, total = Math.max(1, score) } = this.props;

    return (
      <div>
        <h6>{ label }</h6>
        <span>{ Math.round(score / total * 100) }%</span>
      </div>
    )
  }

}

export default PercentageStat;

// FUNCTIONAL COMPONENT
function PercentageStat({ label, score = 20, total = 500 }) {
  return (
    <div>
      <h6>{ label }</h6>
      <span>{score / total * 100}%</span>
    </div>
  )
}

export default PercentageStat;

// CONVERTED TO PURE COMPONENT
class PercentageStat extends React.PureComponent {

  render() {
    const { label, score = 0, total = Math.max(1, score) } = this.props;

    return (
      <div>
        <h6>{ label }</h6>
        <span>{ Math.round(score / total * 100) }%</span>
      </div>
    )
  }
}
export default PercentageStat;


//Functional component
class Title extends React.Component {
  render() {
    return <h1>I am Title</h1>;
  }
}
export default Title;

//class compo
import Hoc from './compo/Hoc';

class App extends Component {  
  render() {  
    return (  
      <div>  
        <h2>HOC Example</h2>  
        JavaTpoint provides best CS tutorials.  
      </div>  
    )  
  }  
}  

export default Hoc(App);  

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

export default Garage;

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

export default Garage;

//events
function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}
export default Football;

function MissedGoal() {
	alert('Missed');
}

function MadeGoal() {
	alert('Goal');
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MissedGoal/>;
  }
  return <MadeGoal/>;
}
export default Goal;

function resultOnScreen() {
  //const a = 'Hii';
  //return a === "Hi" ? <h1>HEllo</h1> : <h1>Bye</h1>;
  //return a === "Hii" ? <h1>HEllo</h1> : <h1>Bye</h1>;

}
export default resultOnScreen;
//spread operator
function spreadOperator() {
  const numbersOne = [1, 2, 3];
  const numbersTwo = [4, 5, 6];
  const numbersCombined = [...numbersOne, ...numbersTwo];
  return numbersCombined;
}
export default spreadOperator;

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

export default MyForm;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render('<div>Helo</div>');

//life cycle
import Counter from './compo/counter';
class App extends Component {

  //1. intilise
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    console.log("ComponentDidMount: When compo renders first time");
  }

  increament() {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div>
*/        /*<h1>Hello, button is clicked {this.state.count} times.</h1>*/
        /*<button onClick={this.increament.bind(this)}>Click here</button> To increase the value, before ES6/5 we used to use bind to increase the count value*/
/*        <Counter number={this.state.count}></Counter>
        <button onClick={() => {this.increament()} }>Click here</button> {/*But now we get the functionality to use arrow function*/
/*      </div>
    )
  }
}

export default App;

  
class App extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {hello: "JavaTpoint"};  
      this.changeState = this.changeState.bind(this)  
   }    
   render() {  
      return (  
         <div>  
             <h1>ReactJS component's Lifecycle</h1>  
             <h3>Hello {this.state.hello}</h3>  
             <button onClick = {this.changeState}>Click Here!</button>          
         </div>  
      );  
   }  
   componentWillMount() {  
      console.log('Component Will MOUNT!')  
   }  
   componentDidMount() {  
      console.log('Component Did MOUNT!')  
   }  
   changeState(){  
      this.setState({hello:"All!!- Its a great reactjs tutorial."});  
   }  
   componentWillReceiveProps(newProps) {      
      console.log('Component Will Recieve Props!')  
   }  
   shouldComponentUpdate(newProps, newState) {  
      return true;  
   }  
   componentWillUpdate(nextProps, nextState) {  
      console.log('Component Will UPDATE!');  
   }  
   componentDidUpdate(prevProps, prevState) {  
      console.log('Component Did UPDATE!')  
   }  
   componentWillUnmount() {  
      console.log('Component Will UNMOUNT!')  
   }  
}  
export default App;

import StateOne from './compo/State';

class App extends Component {  
  render() {  
    return (  
      <>  
        <h2>HOC Example</h2>  
        <StateOne/>
      </>  
    )  
  }  
}  
export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import StateBlock from './compo/State';
import Layout from './compo/Layout';
import LogIn from './pages/LoginForm';
import TablesBlock from './compo/Tables';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
        <Route index element={<StateBlock />} />
          <Route path="login" element={<LogIn/>} />
          <Route path='tables' element={<TablesBlock/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
*/

import LogIn from './pages/LoginForm';
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import LoginSuccess from './pages/LoginSuccess';

class App extends React.Component {  
  render() {  
    const history = createBrowserHistory();
    return (  
      <>
        <Router history = {history}>
          <Route path='/' ><LogIn/></Route>
          <Route path="/link" ><LoginSuccess/>
          </Route> 
        </Router>
      </>  
    )  
  }  
}  
export default App;

