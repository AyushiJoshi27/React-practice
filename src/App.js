import './App.css';
import React  from 'react';
//import React, { useState } from "react";
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
import StoreData from './Components/ProductStore/ProductsStore';
import ChangeButtons from './Components/Hooks/UseEffect/RenderJson/HoverData';
//import PrHome from './Components/Hooks/Routes/PrivateRoutes/PrHome';
//import PrProfile from './Components/Hooks/Routes/PrivateRoutes/PrProfile';
//import PrProtectedRoute from './Components/Hooks/Routes/PrivateRoutes/PrProtectedRoute';
import StoreLoginForm from './Components/ProductStore/StoreLoginForm';
//import StorePrivateRoute from './Components/ProductStore/StorePrivateRoute';
//import ShowProducts from './Components/ProductStore/ManageProduct';
//import RouteTest from './Components/ProductStore/RouteTest';
import StoreCart from './Components/ProductStore/StoreCart';
import ElementStore from './Components/ProductStore/ElementStore';
//import StateRender from './Components/StateRender/Parent';
import Parent from './Components/StateRender/Parent';
import WithoutProvider from './Components/Context/UseWithouProvider/WithoutProvider';
import ContParent from './Components/Context/Practice/ContParent';
import DirectProps from './Components/Context/Practice/DirectProps/DirectProps';
import ParentCtxt from './Components/Context/Task/Task1WithinCompo/ParentCtxt';
import Mains from './Components/Context/Practice/MultipleContext/Mains';

function App() {
  const [user, setUser] = React.useState(null);

  //const handleLogin = () => setUser({ id: '1', name: 'robin' });
  //const handleLogout = () => setUser(null);

  return (
    <>
    {/*<button
      onClick={() => setIsLogged(true)}
      style={{marginTop: "50px"}}>
      Log in
    </button>
    <button 
      onClick={() => setIsLogged(false)}
      style={{marginLeft: "20px"}}>
      Log out
  </button>*/}
  {user ? (
        <button onClick={setUser}>Sign Out</button>
      ) : (
        <div><button onClick={setUser}>Sign In</button></div>
      )}
  <div><button onClick={() => localStorage.removeItem('login')}>Logoff</button></div>  
    <Router>
      <Routes>
        <Route exact path="/" element={< LoginForm />} />
        <Route exact path="/SuccessLogin/:yourName" element={< SuccessLogin />} />
        <Route exact path="/layout" element={ <Layout/> } >
          <Route index element={< Counter />} />
          <Route path='use_ref' element={< UseRef />} />
          <Route path='count_events' element={<CountEvents/>} />
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
          <Route path='render_json' element={ < ChangeButtons /> }></Route>
          <Route path='product_store_data' element={ < StoreData /> } ></Route>
          <Route path='store_login_page' element={ < StoreLoginForm /> }></Route>
          {/*<Route path='show_products' element={ < StorePrivateRoute Component={StoreData}/>} />
          <Route path='test_route' element={< StorePrivateRoute Component={RouteTest} />}></Route>
          <Route path='pr_home' element={ < PrHome /> }></Route>
          <Route element={< PrProtectedRoute isLogged={isLogged}/>}>
            {console.log(isLogged)}
            <Route path='pr_profile' element={ < PrProfile />}></Route>
          </Route>*/}
          <Route path="StoreData/:yourName" element={ <StoreData/> }></Route>
          {/*<Route path='StoreCart/:id' element={ < StoreCart /> }></Route>*/}
          <Route path='cart' element={ < ElementStore /> }></Route>
          <Route path='state_render' element={ < Parent /> }></Route>
          <Route path='without_provider' element={ < WithoutProvider /> }></Route>
          <Route path='context_with_usecontext' element={ < ContParent /> }></Route>
          <Route path='random_context_example' element={ < DirectProps /> }></Route>
          <Route path='change_context_within_compo_without_setter' element={< ParentCtxt />}></Route>
          <Route path='store_cart' element={ < StoreCart /> }></Route>
          <Route path='multiple_context' element={ < Mains /> }></Route>
        </Route>
      </Routes>
      {/*<Link to='/pr_profile'>Go to pr-profile page</Link>*/}
    </Router>
    </>
  );
}

export default App;