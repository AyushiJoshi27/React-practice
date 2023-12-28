import { Link, Outlet } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';

export default function LayoutComponent() {
  return <>
  <ul>
    <li><Link to="box">box</Link></li>
    <li><Link to="container">container</Link></li>
    <li><Link to="flex">flex</Link></li>
    <li><Link to="grid">grid</Link></li>
    <li><Link to="simple-grid">simple grid</Link></li>
    <li><Link to="stack">stack</Link></li> 
    <li><Link to="wrap">wrap</Link></li> 
    <Divider />
    <Divider />
    <Outlet/>
  </ul>
  </>
}