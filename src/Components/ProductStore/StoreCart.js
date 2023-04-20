import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { ContextData } from '../../App';
//import { ContextObj } from './ManageProduct';

export default function StoreCart() {
    const {id} = useParams();
//    const {objectValue} = useContext(ContextObj);
    //console.log(objectValue)
    //const elementId = JSON.parse(id);
    const {data} = useContext(ContextData);
    console.log("cart:",id);
    console.log(data.find(data => parseInt(data.id) === parseInt(id) ));
    //console.log(elementId);

  return (
    <>
      <div>StoreCart</div>
      <button></button>
    </>
  )
}
 