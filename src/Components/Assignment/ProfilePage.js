import React from 'react'
import FbNavBarCompo from './FbNavBar'
import UserInfo from './UserInfo'

export default function ProfilePage() {
  return (
    <div className='fbMainContainer'>
        <FbNavBarCompo  />
        <UserInfo />
    </div>
  )
}
