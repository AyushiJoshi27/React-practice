import React from 'react'
import { useParams } from 'react-router'

export default function StoreCart() {
    const {id} = useParams();
  return (
    <>
        <h1>Id: {id}</h1>
        <div>StoreCart</div>
    </>
  )
}
