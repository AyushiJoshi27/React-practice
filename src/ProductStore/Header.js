import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
export default function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.CartDataReducer);
  //console.log(token);

  // if (!token) {
  //   navigate('/');
  // }

  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem("token");
    }, 15000);
  }, [])

  const GoToCart = () => {
    navigate('/go-to-cart');
  }

  return (
    <div className='cart-block'>
      <i className='store-title'>Product Store</i>
      <div className='cart-manager'>
        <p className='cart-count'><span onClick={GoToCart}><b>{cartData.cartItemCount.length}</b>  Cart</span></p>
        {/*<button onClick={() => localStorage.removeItem("token")}>Logout</button>*/}
      </div>
    </div>
  );
};
