import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';

export default function StylePropLayout() {
  return (
    <ul>
      <li><Link to="filter">Filter</Link></li>
      <li><Link to="pseudo">Pseudo</Link></li>
      <Divider />
      <Outlet />
    </ul>
  )
}
