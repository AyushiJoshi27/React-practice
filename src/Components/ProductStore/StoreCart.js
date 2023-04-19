import React, { useContext } from 'react';
import { ContextObj } from './ManageProduct';

export default function StoreCart() {
    //const {choosenProduct} = useParams();
    const {objectValue} = useContext(ContextObj);
    console.log(objectValue)
    //const elementId = JSON.parse(id);
    //console.log(elementId);

  return (
    <>
      <div>StoreCart</div>
    </>
  )
}
 