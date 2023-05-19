import React from 'react'
import Intro from './Intro'
import Todos from './Todos'
import UserAlbum from './Albums'

export default function AboutUser() {
  return (
    <>
      <Intro />
      <UserAlbum />
      <Todos />
    </>
  )
}
