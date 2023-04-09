import React, {useCallback, useState} from 'react';
import ChildA from './ChildA';

export default function UseCallBack() {
    const [add, setAdd] = useState(0);
    const [count, setCount] = useState(0);
    
    const Learning = useCallback( () => {
        console.log("Heyy");
    }, []);

    return (
        <div>
            <h1>UseCallback</h1>
            <ChildA Learning={Learning} count={count}/>
            <h1>{add}</h1>
            <button onClick={() => setAdd( add + 1 )}>Addition</button>
            <h1>count</h1>
            <button onClick={() => setCount( count +1 )}>Count</button>
        </div>
    )
}