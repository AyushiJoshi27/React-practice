import React from "react";

export default function DisplayData(product) {
    console.log(product);

    /*
    if (!data || !Array.isArray(data) || data.length === 0) {
        console.log("Null");
        return null;
    }*/

    return (
        <div>
            {product.map((obj) => (
                <p id={obj.id}>{obj.a}</p>
            ))}
        </div>
    );
}