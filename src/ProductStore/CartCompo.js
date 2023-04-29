import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

export default function CartCompo() {
  const cartData = useSelector((state) => state.CartDataReducer.cartItemCount);
  console.log(cartData);
  const a = [];
  a.push(cartData);
  console.log(a);

  return (
    <div className='cart-block'>
        <p><b>0</b>  Cart</p>
      </div>
  );
};
