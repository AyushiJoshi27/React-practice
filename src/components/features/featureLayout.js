import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';

export default function FeatureLayoutCompo() {
  return (
    <ul>
      <li><Link to="colormode">Colormode</Link></li>
      <li><Link to="pseudo">Pseudo</Link></li>
      <li><Link to="responsive-style">Responsive Style</Link></li>
      <li><Link to="theme-compo-style">Theme component style</Link></li>
      <Divider />
      <Outlet />
    </ul>
  )
}
