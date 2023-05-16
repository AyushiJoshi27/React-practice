import React from 'react'
import FbNavBarCompo from './FbNavBar'
import Posts from './Posts'

export default function ProfilePage() {
  return (
    <div>
        <FbNavBarCompo  />
        <div style={{marginRight: 30, marginLeft: 30}} className='profile-content'>
          <Posts />
        </div>
    </div>
  )
}
