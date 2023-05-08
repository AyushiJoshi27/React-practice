import React from 'react';
import {Route, Navigate} from 'react-router-dom';

const ProtectedRoute = ({ path, element: Component, isAuthenticated, ...props}) => {
  return isAuthenticated ? (
    <Route path={path} element={<Component {...props} /> } />
  ) : (
    <Navigate to='/' replace />
  )
}

export default ProtectedRoute;