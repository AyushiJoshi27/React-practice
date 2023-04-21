import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { ContextData } from '../../App';
import ElementStore from './ElementStore';

export default function StoreCart() {
    const {id} = useParams();
    const {data} = useContext(ContextData);
    console.log("cart:",id);
    console.log(data.find(data => parseInt(data.id) === parseInt(id) ));
    let dataObj = data.find(data => parseInt(data.id) === parseInt(id) )

  return (
    <>
      <div>StoreCart</div>
      <ElementStore propItem={dataObj}/>
    </>
  )
}
