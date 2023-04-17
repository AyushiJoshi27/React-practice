import React from 'react'

export default function ElementStore({ propItem }) {
  return (
    <>
      <div className="content"
        id={propItem.id}>
        <div className="img-wrap">
          <img src={propItem.image} className="item-img" alt={propItem.title} />
        </div>
        <div className="details">
          <p><b>Title: </b>{propItem.title}</p>
          <p><b>Price: </b>{propItem.price}</p>
          <p><b>Rating: </b>{propItem.rating.rate}</p>
          <p><b>Available: </b>{propItem.rating.count} </p>
        </div>
      </div>
      <div>ElementStore</div>
    </>
  )
}
