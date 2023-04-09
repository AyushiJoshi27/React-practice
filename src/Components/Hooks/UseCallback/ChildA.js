import React, {memo}  from "react";

function ChildA() {
    console.log("Child compo");

    return ( 
        <></>
    )
}

export default memo(ChildA);