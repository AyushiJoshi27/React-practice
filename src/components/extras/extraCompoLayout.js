import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';

export default function ExtraCompoLayout() {
  return (
    <div>
      <ul>
        <li>
          <Link to="show-hide">Show Hide</Link>
        </li>
        <li>
          <Link to="transitions">Transitions</Link>
        </li>
      </ul>
      <Divider />
      <Divider />
      <Outlet />
    </div>
  )
}
