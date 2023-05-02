import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

export default function GoToCart() {
  const cartData = useSelector((state) => state.CartDataReducer.cartItemCount);
  return (
    <div>
      <div className='cart-block'>
        <i style={{float: 'left', marginLeft:"30px"}}><b>Product Store</b></i>
        <p className='cart-count'><b>{cartData.length}</b>  Cart</p>
      </div>
      <div className="content-wrapper">
        {cartData.map((item, index) => {
          return (
            <div className="main-content" key={index}>
              <div className="content"
                id={item.id}>
                <div className="img-wrap">
                  <img src={item.image} className="item-img" alt={item.title} />
                </div>
                <div className="details">
                  <p><b>Title: </b>{item.title}</p>
                  <p><b>Price: </b>{item.price}</p>
                  <p><b>Rating: </b>{item.rating.rate}</p>
                  <p><b>Available: </b>{item.rating.count} </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      </div>
      )
}
