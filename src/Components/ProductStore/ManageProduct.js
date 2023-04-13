import React, {useEffect, useRef} from "react";

const ShowProducts = ({products}) => {
  const choosenEleRef = useRef([]);

  useEffect(() => {
    const elements = document.querySelectorAll('.main-content');

    elements.forEach((element) => {
      element.addEventListener('mouseover', OnHover);
      element.addEventListener('mouseout', OffHover);

      return () => {
        element.removeEventListener('mouseover', OnHover);
        element.removeEventListener('mouseout', OffHover);
      }
    })
  }, []);

  const OnHover = (e) => {
    e.target.closest('.main-content').style.boxShadow = '1px 2px 5px 0px red';
  }

  const OffHover = (e) => {
    e.target.closest('.main-content').style.boxShadow= '1px 2px 5px 0px lightgray';
  }

  return (
    <div className="content-wrapper">
      {products.map((item, index) => (
        <div className="main-content" 
          key={item.id}
          id={item.id}
          ref={(obj) => (choosenEleRef.current[index] = obj)}
        >
          <div className="img-wrap">
            <img src={item.image} alt={item.title} className="item-img" />
          </div>
          <div className="details">
            <p><b>Title: </b>{item.title}</p>
            <p><b>Price: </b>{item.price}</p>
            <p><b>Rating: </b>{item.rating.rate}</p>
            <p><b>Available: </b>{item.rating.count} </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowProducts;