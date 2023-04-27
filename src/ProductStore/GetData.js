import React, { useEffect } from 'react';

export default function GetData() {

  useEffect(() => { 
    getData();
  }, [])

  const getData = async() => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    console.log("data" ,data);
  } 
  return (
    <div>GetData</div>
  )
}
