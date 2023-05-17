import { Paper } from '@mui/material'
import React from 'react'
import Intro from './Intro'
import Todos from './Todos'
import Photos from './Photos'
import UserAlbums from './Albums'

export default function AboutUser() {
  return (
    <>
      <Intro props="UserIntro" />
      <Todos props="user Todos" />
      <UserAlbums props="UserAlbums" />
      <Photos props="Photos" />
    </>
  )
}
