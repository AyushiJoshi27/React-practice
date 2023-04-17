import React from 'react'

export default function StateRender() {

  const item = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 }
  }

  const imgObj = encodeURIComponent(JSON.stringify(item.image));

  return (
    <>
      <div className="main-content" id={item.id}>
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
              id={imgObj}>Add to cart</button>
            </p>
          </div>
        </div>
      <div>StateRender</div>
    </>
  )
}
