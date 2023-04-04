import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import SuccessLogin from './Components/SuccessLogin';
import Timer from './Components/Hooks/UseState';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={< LoginForm />} />
        <Route exact path="/SuccessLogin/:yourName" element={< SuccessLogin />} />
      </Routes>
    </Router>
  );
}

export default App;

/*
import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

//Effect Cleanup
import { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}
/*
//usehistory
import React, { useEffect } from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";

// Create a custom hook that uses both useLocation and useEffect
const useScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
};

// This is corresponding to "/" route
const Home = (props) => {
  useScrollToTop();
  return (
    <>
      <h1>Home</h1>
      <hr />
      <p style={{ marginTop: "50vh" }}>
        <Link to="/contact">Go to contact page</Link>
      </p>
      <p style={{marginTop: "10vh"}}>
        <Link to="/about">Go to About page</Link>
      </p>
    </>
  );
};

// This is corresponding to "/contact" route
const Contact = (props) => {
  useScrollToTop();
  return (
    <>
      <h1>Contact</h1>
      <hr />
      <p style={{ marginTop: "50vh" }}>
        <Link to="/home">Go to home page</Link>
      </p>
      <p style={{marginTop: "10vh"}}>
        <Link to="/about">Go to About page</Link>
      </p>
    </>
  );
};

//About
const About = (props) => {
  useScrollToTop();
  return (
    <>
      <h1>About</h1>
      <hr />
      <p style={{ marginTop: "50vh" }}>
        <Link to="/">Go to homepage</Link>
      </p>
      <p style={{ marginTop: "10vh" }}>
        <Link to="/contact">Go to contact page</Link>
      </p>
    </>
  );
};

//not able to find home page after contact?

// The root component
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

*/