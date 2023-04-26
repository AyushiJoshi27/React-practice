import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chnageColor } from '../actions/ColorActions';

export default function ColorCompo() {
  const color = useSelector(state => state.color)
  const dispatch = useDispatch();

  return (
    <div>
      <h3 style={{color: color}}>Color Compo</h3>
      <button onClick={dispatch(chnageColor('darkgrey'))}>To Change Color</button>
    </div>
  )
}