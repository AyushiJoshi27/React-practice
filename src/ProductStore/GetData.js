import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction } from '../actions/GetDataAction';
import { CartDataAction } from '../actions/CartDataAction';
import { baseUrl } from '../store';

export default function GetData() {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.ApiReducer);
  const cartData = useSelector((state) => state.CartDataReducer.cartItemCount);

  useEffect(() => {
    if (!storeData.length) {
      fetch(`${baseUrl}products`)
        .then(res => res.json())
        .then(data => dispatch(getDataAction(data)));
    }
  }, [dispatch, storeData]);

  const CartCount = (product) => {
    let obj = cartData.find((data) => parseInt(data.id) === parseInt(product.id))
    if (obj) {
      alert("already exist");
    } else {
      dispatch(CartDataAction(product))
    }
  };

  return (
    <div>
      <div className="content-wrapper">
        {storeData.map((item, index) => {
          return (
            <div className="main-content" key={index}>
              <div className="content"
                id={item.id}>
                <div className="img-wrap">
                  <img src={item.image} className="item-img" alt={item.title} />
                </div>
                <div className='add-to-cart'>
                  <button className="to-add" onClick={() => CartCount(item)}>Add to cart</button>
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
