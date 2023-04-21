import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { ContextData } from "../../App";
import ElementStore from "./ElementStore";

const ShowProducts = () => {
  const navigate = useNavigate()
  const {data} = useContext(ContextData);

  console.log("Data" , data);

  const btnHandle = (id) => {
    console.log("Hii");
    navigate(`/layout/storeCart/${id}`);
  }

  return (
    <div className="content-wrapper">
      {data.map((item, index) => {
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
/////////context creation in loop????????