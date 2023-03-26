//import React from 'react';
import './App.css';
/*
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />;
root.render(element);

function Cars(props) {
  return <li>{props.categ}</li>;
}*/
//{navOpt.map((Cars) => <navOpt categ={Cars})}

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function App() {
  //const navOpt = ['Docs', 'Tutorial', 'Blog', 'Community'];
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <nav>
      <p>Try out preview of the new React Docs! <a href={"https://beta.reactjs.org/"}> beta.reactjs.org</a></p>
        <ul>
          <li><img src="https://beta.reactjs.org/" alt="nav-react-icon" /> React</li>
        </ul>
        <ul>
        {cars.map((car) => <Car brand={car} />)}
        </ul>
      </nav>
      <div className="main">Hello, This is Ayushi.</div>
    </>
  );
}

export default App;


