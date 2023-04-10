import React from 'react';
import { FirstName } from './CompoA';

const CompoD = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fName) => {
                    return <h3 style={{textAlign: "center"}}>I am a {fName}.</h3>
                }}
            </FirstName.Consumer>
        </>
    )
}

export default CompoD;