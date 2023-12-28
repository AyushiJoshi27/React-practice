import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';

export default function UtitlityLayout() {
  return (
    <ul>
      <li><Link to="useboolean">UseBoolean</Link></li>
      <li><Link to="usecheckbox">UseCheckBox</Link></li>
      <li><Link to="useradio">useRadio</Link></li>
      <Divider />
      <Outlet />
    </ul>
  )
}
