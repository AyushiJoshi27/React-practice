import React from 'react'
import { useParams } from 'react-router'

export default function StoreCart({products}) {
    const {id} = useParams();
    //console.log({products})
  return (
    <>
        {/*products.map((item) => (
            console.log(item.id)
        ))*/}
            <h1>Id: {id}</h1>
            <div>StoreCart</div>
    </>
  )
}
 