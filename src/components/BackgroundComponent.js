import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBackground } from '../actions/BackgroundActions';

function BackgroundComponent() {
const background = useSelector(state => state.background);
const dispatch = useDispatch();

const handleClick = () => {
dispatch(changeBackground('yellow'));
}

return (
<div>
<h1 style={{ backgroundColor: background }}>Background Component</h1>
<button onClick={handleClick}>Change Background</button>
</div>
);
}

export default BackgroundComponent;