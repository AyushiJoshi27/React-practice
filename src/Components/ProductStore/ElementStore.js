import React from 'react'

export default function ElementStore({propItem, propIndex, selectedRef}) {
  return (
    <>
    <div className="content" 
          id={propItem.id}
          ref={(obj) => (selectedRef.current[propIndex] = obj)}>
          <div className="img-wrap">
            <img src={propItem.image} alt={propItem.title} className="item-img" />
          </div>
          <div className="details">
            <p id={propIndex+1}><b>Title: </b>{propItem.title}</p>
            <p><b>Price: </b>{propItem.price}</p>
            <p><b>Rating: </b>{propItem.rating.rate}</p>
            <p><b>Available: </b>{propItem.rating.count} </p>
          </div>
        </div>
    <div>ElementStore</div>
    </>
  )
}
