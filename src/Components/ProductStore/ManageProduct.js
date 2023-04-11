import React from 'react';

const ShowProducts = ({products}) => {
    return (
      <div className="content-wrapper">
        {products.map((product) => (
          <div className="main-content" key={product.id}>
            <div className="img-wrap">
              <img src={product.image} alt={product.title} className="item-img" />
            </div>
            <div className="details">
              <p><b>Title: </b>{product.title}</p>
              <p><b>Price: </b>{product.price}</p>
              <p><b>Rating:</b>{product.rating.rate}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

export default ShowProducts;