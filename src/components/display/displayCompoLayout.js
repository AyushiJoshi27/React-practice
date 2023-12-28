import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';

export default function DisplayCompoLayout() {
  return (
    <div>
      <ul>
        <li>
        <Link to="card">Card</Link>
        </li>
        <li>
        <Link to="list">List</Link>
        </li>
        <li>
        <Link to="stat">Stat</Link>
        </li>
        <li>
        <Link to="table">Table</Link>
        </li>
        <li>
        <Link to="tag">Tag</Link>
        </li>
      </ul>
      <Divider />
    <Divider />
    <Outlet/>
    </div>
  )
}
