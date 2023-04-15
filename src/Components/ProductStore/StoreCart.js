import React from 'react'
import { useParams } from 'react-router'
import ElementStore from './ElementStore';

export default function StoreCart({data}) {
    //const {id} = useParams();
    const id = 3;
    const btnId = localStorage.getItem('btnId');
    //console.log({products})
  return (
    <>
        
        {console.log(data[id].title)}
        {/*       {data.map((item, index) => {
            return (
                <ElementStore propItem={item} propIndex={index} selectedRef={choosenEleRef} />
            )
        })}
        */}
        
        <h3>COnst Id: {btnId}</h3>
        <div>StoreCart</div>
    </>
  )
}
 