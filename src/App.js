import './App.css';
//import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import SuccessLogin from './Components/SuccessLogin';
import Layout from './Components/Layout';
import Counter from './Components/Hooks/UseEffect';
import CountEvents from './Components/Hooks/UseEffect/Counter';
import UseRef from './Components/Hooks/UseRef';
import { LoginPage } from './Components/Hooks/Routes/BasicRouting/LoginRoute';
import Home from './Components/Hooks/Routes/BasicRouting/Home';
import Profile from './Components/Hooks/Routes/BasicRouting/About';
import About from './Components/Hooks/Routes/BasicRouting/Profile';
import LayoutEffect from './Components/Hooks/UseLayoutEffect/UseLayoutEffect';
import EventLayout from './Components/Hooks/UseLayoutEffect/EventLayoutEffect';
import Memo from './Components/Hooks/UseMemo/Memomization';
import UseMemo from './Components/Hooks/UseMemo/UseMemo';
import UseCallBack from './Components/Hooks/UseCallback/Usecallback';
import CompoA from './Components/Context/WayToUse/CompoA';
import AppA from './Components/Context/Requirements/AppA';
import DisplayData from './Components/Hooks/UseEffect/RenderJson/Hover';
import ShowProducts from './Components/ProductStore/ManageProduct';
import StoreData from './Components/ProductStore/ProductsStore';

function App() {
  //const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={< LoginForm />} />
        <Route exact path="/SuccessLogin/:yourName" element={< SuccessLogin />} />
        < Route exact path="/layout" element={ <Layout/> } >
          <Route index element={< Counter />} />
          <Route path='use_ref' element={< UseRef />} />
          <Route path='count_events' element={<CountEvents/>} />
          <Route path='render_json' element={ <DisplayData/> }></Route>
          <Route path='login-route' element={< LoginPage />}></Route>
          <Route path='protected_home' element={< Home />}></Route>
          <Route path='protected_profile' element={< Profile />}></Route>
          <Route path='protected_About' element={< About />}></Route>
          <Route path='layout_effect_basic' element={ < LayoutEffect /> }></Route>
          <Route path='layout_effect_event' element={ < EventLayout /> } />
          <Route path='requirement_of_memo' element={ < Memo /> }></Route>
          <Route path='use_memo' element={< UseMemo />}></Route>
          <Route path='use_callback' element={< UseCallBack />}></Route>
          <Route path='way_to_use_context' element={ < CompoA />}></Route>
          <Route path='context-requiremnt' element={ < AppA /> }></Route>
          <Route path='store_data' element={ < StoreData /> } ></Route>
          {/**<<Route path='store_login' element={ < LoginForm setIsAuthenticated={setIsAuthenticated} /> } />
          <ProtectedRoute exact path="/SuccessLogin/:yourName" element={SuccessLogin} isAuthenticated={isAuthenticated} />
          <Route path='/login' element={< LoginPage setIsAuthenticated={setIsAuthenticated} />}></Route>**/}

        </Route>
      </Routes>
    </Router>
  );
}

export default App;


/*

          
*/