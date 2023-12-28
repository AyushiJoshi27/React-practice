import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';

export default function FormLayout() {
  return (
    <div>
    <ul>
    <li>
    <Link to="checkbox">Checkbox</Link>
    </li>
    <li>
    <Link to="form-control">FormControl</Link>
    </li>
    <li>
    <Link to="icon-button">IconButton</Link>
    </li>
    <li>
    <Link to="input">Input</Link>
    </li>
    <li>
    <Link to="pin-input">Pin Input</Link>
    </li>
    <li>
    <Link to="textarea">Textarea</Link>
    </li>
    <li>
    <Link to="switch">Switch</Link>
    </li>
  </ul>
  <Divider />
<Divider />
<Outlet/>
</div>
  )
}
