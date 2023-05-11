import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function ButtonGroupCompo() {
    return (
        <div style={{ marginBottom: "100px" }}>
            <div>
                <p>Basic</p>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </div>
            <div>
                <p>Variants</p>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </div>
            <div>
                <p>Disabled buttons</p>
                <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons"
                >
                    <Button>One</Button>
                    <Button>Two</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}
