import React from 'react';
import Button from '@mui/material/Button';

export default function Buttons() {
  return (
    <>
      <div style={{ marginBottom: '100px' }}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
      <div>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
        <p>Disabled Button</p>
        <Button variant="contained" disableElevation>
          Disable elevation
        </Button>
      </div>
      <div>
        <p>Outlined button</p>
        <Button variant="outlined">Primary</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons">
          Link
        </Button>
      </div>
      <div>
        <p>Handling clicks</p>
        <Button
          onClick={() => {
            alert('clicked');
          }}
        >
          Click me
        </Button>
      </div>
      <div>
        <p>Color</p>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </div>
      <div>
        <p><b>Upload button</b></p>
        <p>Multiple items</p>
        <Button variant="contained" component="label">
          Upload
          <input accept="image/*" multiple type="file" />
        </Button>
        <p>Single items</p>
        <Button variant="contained" component="label">
          Upload
          <input accept="image/*" type="file" />
        </Button>
      </div>
    </>
  );
};
