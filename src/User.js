import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useRef} from 'react';

const User = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state);
    const count = useSelector((state)=> state.counterReducer.counter);
    let userElem = useRef();

    const changeHandler = (e) => {
        const name = userElem.current.value;
        console.log(userElem.current.value);
        dispatch({ type: "CHANGE_NAME", payload: name });
    }

    return (
        <div>
            <h3>Counter: {count}</h3>
            <h3>username: {user.name}</h3>
            <input type="text" ref={userElem} defaultValue={user.name} />
            <button  onClick={changeHandler}>Change username</button>
        </div>
    )
}

export default User;