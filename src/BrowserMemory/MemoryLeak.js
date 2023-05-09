import React, { useState } from 'react'

export default function MemoryLeak() {
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setInterval(() => {
            setCount(count + 1);
        }, 10);
    };
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleButtonClick}>Start Counting</button>
        </div>
    )
}
