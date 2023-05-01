import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

export default function CartCompo() {
  const cartData = useSelector((state) => state.CartDataReducer.cartItemCount);
  console.log(cartData);
  return (
    <div className='cart-block'>
      <p><b>{cartData.length}</b>  Cart</p>
    </div>
  );
};
