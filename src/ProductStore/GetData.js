import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction } from '../actions/GetDataAction';

export default function GetData() {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.ApiReducer)
  console.log(storeData);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    console.log("data", JSON.stringify(data));
    dispatch(getDataAction(data))
  }
  return (
    <div>
      <div className="content-wrapper">
        {storeData.map((item, index) => {
          return (
            <div className="main-content" key={item.id}>
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
