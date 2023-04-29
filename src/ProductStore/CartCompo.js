import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

export default function CartCompo() {
  const cartData = useSelector((state) => state.CartDataReducer.cartItemCount);
  console.log(cartData);
  const a = { myArray: cartData }
  console.log("CART AT INDEX 0: " , a);
  console.log("len: " + a.myArray.length);

  return (
    <div className='cart-block'>
        <p><b>0</b>  Cart</p>
      </div>
  );
};
