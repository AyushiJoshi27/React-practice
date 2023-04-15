import React, {useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import ElementStore from "./ElementStore";

const ShowProducts = ({products}) => {
  const choosenEleRef = useRef([]);
  const navigate = useNavigate()

  useEffect(() => {
    //const elements = document.querySelectorAll('.main-content');
    //const addBtn = document.querySelectorAll('.to-add');

    /*addBtn.forEach((btn) => {
      btn.addEventListener('click', onClick); 
    })*/

    const addBtn = document.querySelectorAll('.to-add');
    console.log(addBtn);
    /*
    addBtn.forEach((btn) => {
      btn.addEventListener('click', onClick); 
    })*/
    /*
    elements.forEach((element) => {
      element.addEventListener('mouseover', OnHover);
      element.addEventListener('mouseout', OffHover);


      return () => {
        element.removeEventListener('mouseover', OnHover);
        element.removeEventListener('mouseout', OffHover);
      }
    })*/
  }, []);
  /*
  const onClick = (e) => {
    const id = e.target.id;
    console.log(id);
    //localStorage.setItem('btnId', id);
    //navigate(`/layout/StoreCart`)
    //navigate(`/layout/cart`)
  }*/

  const OnHover = (e) => {
    e.target.closest('.main-content').style.boxShadow = '1px 2px 15px 0px lightgray';
  }

  const OffHover = (e) => {
    e.target.closest('.main-content').style.boxShadow= '1px 2px 5px 0px lightgray';
  }

  return (
    <div className="content-wrapper">
      {products.map((item, index) => {
        console.log(JSON.stringify(item));
        return (         
          <div className="main-content" key={item.id}>
          <ElementStore propItem={item} propIndex={index} selectedRef={choosenEleRef}/>
            <p>
              <button 
              id={JSON.stringify(item)}>Add to cart</button>
            </p>
            <p>
            <button className="to-add" 
              >Add to </button>
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
