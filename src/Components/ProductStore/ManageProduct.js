import React, {createContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import ElementStore from "./ElementStore";
import StoreCart from "./StoreCart";

const ContextObj = createContext();

const ShowProducts = ({products}) => {
  const navigate = useNavigate()
  const [objectValue, setObjectValue] = useState(null);

  const btnHandle = (e) => {
    const id = e.target.id;
    setObjectValue(id);
    //console.log(id);
    //<ContextObj.Provider value={id} >
    <ContextObj.Provider value={{objectValue, setObjectValue}} >
      < StoreCart />
    </ContextObj.Provider>
    //console.log(id);
    navigate('/layout/store_cart');
  }

  return (
    <div className="content-wrapper">
      {products.map((item, index) => {
        var object = JSON.stringify(item);
        //console.log(object);
        const itemObject = JSON.stringify(encodeURIComponent(object));
        //console.log(itemObject);
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
export {ContextObj};
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
