import React, {createContext, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { ContextData } from "../../App";
import ElementStore from "./ElementStore";
import StoreCart from "./StoreCart";

//const ContextObj = createContext();

const ShowProducts = () => {
  const navigate = useNavigate()
  const [objectValue, setObjectValue] = useState(null);
  const {data} = useContext(ContextData);

  console.log("Data" , data);

  const btnHandle = (id) => {
    //const id = e.target;
    //setObjectValue(id);
    console.log("Hii");
    //<ContextObj.Provider value={id} >
    //console.log(id);
    navigate(`/layout/storeCart/${id}`);
  }

  return (
    <div className="content-wrapper">
      {/*<ContextObj.Provider value={{products[objectValue]}} >
          < StoreCart />
      </ContextObj.Provider>*/}
      {data.map((item, index) => {
        var object = JSON.stringify(item);
        //console.log(object);
        const itemObject = JSON.stringify(encodeURIComponent(object));
        //console.log(itemObject);
        return (         
          <div className="main-content" key={item.id}>
          <ElementStore propItem={item} propIndex={index} />
            <p>
              <button onClick={() => btnHandle(item.id)} className="to-add">Add to cart</button>
            </p>
          </div>
        )
      })}
      Manager: List of products
    </div>
  );
}

export default ShowProducts;
//export {ContextObj};
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
/////////context creation in loop????????