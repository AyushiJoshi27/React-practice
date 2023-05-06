import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CartDataAction } from '../actions/CartDataAction';

export default function GoToCart() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.CartDataReducer.cartItemCount);

  const removeItem = item => {
    dispatch(CartDataAction(item));
  }

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("token: ", token);

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate])

  return (
    <div>
      <div className='cart-block'>
        <i className='store-title'>Product Store</i>
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
                <div className="item-remove">
                  <button onClick={() => removeItem(item)}>Delete</button>
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
