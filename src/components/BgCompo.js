import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBackground } from '../actions/BackgroundAction';

export default function BgCompo() {
  const background = useSelector(state => state.background)
  const dispatch = useDispatch();
  return (
    <div>
        <h3 style={{backgroundColor : background}}>Background compo</h3>
        <button onClick={() => {
            dispatch(changeBackground('blue'))
        }}>Change Bg</button>
    </div>
  )
}
