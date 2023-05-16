import React from 'react'
import PrimarySearchAppBar from '../Navbar/MenuNavbar'
import RecipeReviewCard from './Photos'

export default function ProfilePage() {
  return (
    <div>
        <PrimarySearchAppBar />
        <div style={{marginRight: 30, marginLeft: 30}}>
          <RecipeReviewCard />
        </div>
    </div>
  )
}
