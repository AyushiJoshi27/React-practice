import { useState } from "react"

export default function Memo() {
    
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(50);

    function Multiplication() {
        console.log("Multi");
        return add + 100;
    }

    return (
        <>
            <div style={{textAlign: "center"}}>
                <h2>use of Memomization</h2>
                <button onClick={() => setAdd(add + 5)}>Addition</button>
                <label>{add}</label>
                <br /><br />
                <button onClick={() => setSub(sub - 5 )}>Substraction</button>
                <label>{sub}</label>
                <br />
                <h3>{Multiplication()}</h3>
            </div>
        </>
    )
}