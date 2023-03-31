import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import SuccessLogin from './Components/SuccessLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={< LoginForm />} />
        <Route exact path="/SuccessLogin/:yourName" element={< SuccessLogin />}  />
      </Routes>
    </Router>
  );
}

export default App;