import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';

export default function OverlayLayout() {
  return (
    <ul>
      <li><Link to="modal">Modal</Link></li>
      <li><Link to="menu">Menu</Link></li>
      <li><Link to="drawer">Drawer</Link></li>
      <li><Link to="Alert">Alert</Link></li>
      <Divider />
      <Outlet />
    </ul>
  )
}
