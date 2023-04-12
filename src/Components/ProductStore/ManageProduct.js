import React from 'react';

const ShowProducts = ({products}) => {
    return (
      <div className="content-wrapper">
        {products.map((item) => (
          <div className="main-content" 
            key={item.id}
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