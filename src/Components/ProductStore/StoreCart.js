import React from 'react'
import { useParams } from 'react-router'

export default function StoreCart() {
    const {choosenProduct} = useParams();
    console.log("Encoded:" + {choosenProduct});
    //const btnId = localStorage.getItem('btnId');
    //console.log(imgUrl);
  return (
    <>
        
        {/*
        <div className="main-content"
          key={choosenProduct}
        >
           <div className="img-wrap">
            <img src={choosenProduct.image} alt={choosenProduct.title} className="item-img" />
          </div>
          <div className="details">
            <p id={choosenProduct+1}><b>Title: </b>{choosenProduct.title}</p>
            <p><b>Price: </b>{choosenProduct.price}</p>
            
          </div> 
        </div>
        */}
        <h3>Choosen-product: {choosenProduct}</h3>
        <div>StoreCart</div>
    </>
  )
}
 