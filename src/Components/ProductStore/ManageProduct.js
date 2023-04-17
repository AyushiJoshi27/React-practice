import React, {useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import ElementStore from "./ElementStore";

const ShowProducts = ({products}) => {
  const navigate = useNavigate()
/*
  useEffect(() => {
  }    
*/
  const btnHandle = (e) => {
    const id = e.target.id;
    const elementId = JSON.parse(id);
    console.log(elementId);
    console.log(id);
    navigate(`/StoreCart/${id}`);
  }

  return (
    <div className="content-wrapper">
      {products.map((item, index) => {
        var object = JSON.stringify(item);
        console.log(object);
        const itemObject = JSON.stringify(encodeURIComponent(object));
        console.log(itemObject);
        return (         
          <div className="main-content" key={item.id}>
          <ElementStore propItem={item} propIndex={index} />
            <p>
              <button id={itemObject} onClick={btnHandle} className="to-add">Add to cart</button>
            </p>
          </div>
        )
      })}
    </div>
  );
}

export default ShowProducts;

/*<div className="main-content" 
          key={item.id}
          id={item.id}
          ref={(obj) => (choosenEleRef.current[index] = obj)}>
          <div className="img-wrap">
            <img src={item.image} alt={item.title} className="item-img" />
          </div>
          <div className="details">
            <p><b>Title: </b>{item.title}</p>
            <p><b>Price: </b>{item.price}</p>
            <p><b>Rating: </b>{item.rating.rate}</p>
            <p><b>Available: </b>{item.rating.count} </p>
            <p><button 
              className="to-add" 
              id={JSON.stringify(item)}>Add to cart</button>
            </p>
          </div>
        </div>*/
