import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction } from '../actions/GetDataAction';
import { AddToCartAction } from '../actions/AddToCartAction';
import { CartDataAction } from '../actions/CartDataAction';

export default function GetData() {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.ApiReducer);
  //console.log(storeData);
  const cartData = useSelector((state) => state.CartDataReducer.cartItemCount);
  //console.log(storeData);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    //console.log("data", JSON.stringify(data));
    dispatch(getDataAction(data))
  };

  const CartCount = (product) => {
    console.log(product);
    //dispatch(AddToCartAction())
    //dispatch(CartDataAction())
      console.log(cartData);
      if (cartData.length === 0) {
        cartData.push(product);
        //console.log(dispatch(CartDataAction(cartData)));
      } else if (
        cartData.find(
          (cartData) => parseInt(cartData.id) === parseInt(product.id)
        ) &&
        cartData.length !== 0
      ) {
        console.log("already exist");
      } else if (
        cartData.find(
          (cartData) => parseInt(cartData.id) !== parseInt(product.id)
        )
      ) {
        cartData.push(product);
        dispatch(CartDataAction(cartData));
        console.log("not found");
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
          );
        })};
      </div>
    </div>
  )
}
