import React from 'react';

export default function TextField() {
    return (
        <>
        <div>
            <p>Basic</p>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
        </>
    )
}
