import './App.css';
import React, { useEffect, useState }  from 'react';
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
import StoreLoginForm from './Components/ProductStore/StoreLoginForm';
import StoreCart from './Components/ProductStore/StoreCart';
import ElementStore from './Components/ProductStore/ElementStore';
import Parent from './Components/StateRender/Parent';
import WithoutProvider from './Components/Context/UseWithouProvider/WithoutProvider';
import ContParent from './Components/Context/Practice/ContParent';
import DirectProps from './Components/Context/Practice/DirectProps/DirectProps';
import ParentCtxt from './Components/Context/Task/Task1WithinCompo/ParentCtxt';
import Mains from './Components/Context/Practice/MultipleContext/Mains';
import { products } from './ProductStore';
export const ContextData = React.createContext();

const data = products;

function App() {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    return fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((data) => setProducts(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <>
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
          <Route path='cart' element={ < ElementStore /> }></Route>
          <Route path='state_render' element={ < Parent /> }></Route>
          <Route path='without_provider' element={ < WithoutProvider /> }></Route>
          <Route path='context_with_usecontext' element={ < ContParent /> }></Route>
          <Route path='random_context_example' element={ < DirectProps /> }></Route>
          <Route path='change_context_within_compo_without_setter' element={< ParentCtxt />}></Route>
          <Route path='multiple_context' element={ < Mains /> }></Route>
          <Route
            path="StoreData"
            element={
              <ContextData.Provider value={{data}}>
                <StoreData/>
              </ContextData.Provider>
            }
          />
          <Route
            path="storeCart/:id"
            element={
              <ContextData.Provider value={{data}}>
                <StoreCart/>
              </ContextData.Provider>
            }
          />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;