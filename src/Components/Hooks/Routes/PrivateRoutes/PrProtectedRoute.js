import React from 'react'
import { Navigate } from 'react-router'

export default function PrProtectedRoute({isLogged}) {
  return isLogged ? <Navigate to='pr_profile'/> :  <Navigate to='pr_home'/>
}
