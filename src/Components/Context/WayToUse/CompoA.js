import React, { createContext } from 'react';
import CompoB from './CompoB';

const FirstName = createContext();

const CompoA = () => {

    return (
        <>
            <FirstName.Provider value={ "Alpha" }>
                < CompoB />    
            </FirstName.Provider>
        </>
    );
};

export default CompoA;
export { FirstName };