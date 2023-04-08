import React, { useState, useLayoutEffect, useEffect } from "react";
//import React, {useEffect} from "react";

const LayoutEffect = () => {
    //const [num, setNum] = useState(0);
    useEffect(() => {
        console.log("Hello");
    }, []);
    useLayoutEffect(() => {
        console.log("Layout");
    }, []);
    useEffect(() => {
        console.log("hii");
    }, []);

    return (
        <div>LayoutEffect</div>
    )
}
    
export default LayoutEffect;