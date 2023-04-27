import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from './actions/colorActions';

function ColorComponent() {
const color = useSelector(state => state.color);
const dispatch = useDispatch();

const handleClick = () => {
dispatch(changeColor('red'));
}

return (
<div>
<h1 style={{ color: color }}>Color Component</h1>
<button onClick={handleClick}>Change Color</button>
</div>
);
}

export default ColorComponent;