import React from 'react'
import Intro from './Intro'
import Todos from './Todos'
import Photos from './Photos'
import UserAlbums from './Albums'

export default function AboutUser() {
  return (
    <>
      <Intro intro="User Intro" />
      <Todos todos="user Todos" />
      <UserAlbums album="User Albums" />
      <Photos photo="User Photos" />
    </>
  )
}
