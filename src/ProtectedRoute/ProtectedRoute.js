import React from 'react';
import {Route, Navigate} from 'react-router-dom';

const PrivateRoute = ({ path, element: Component, isAuthenticated, ...props}) => {
  const obj = isAuthenticated ? "authenticated" : "unauthenticated";
  return (
    <Route
      path={path}
      element={
        isAuthenticated ? (
          <Component {...props} key={obj} />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  )
}

export default PrivateRoute;