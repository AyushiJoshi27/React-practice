import React from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate()
  const cartData = useSelector((state) => state.CartDataReducer);
  const GoToCart = () => {
    navigate(`/go-to-cart`);
  }

  return (
    <div className='cart-block'>
      <i className='store-title'>Product Store</i>
      <p className='cart-count'><span onClick={GoToCart}><b>{cartData.cartItemCount.length}</b>  Cart</span></p>
    </div>
  );
};
