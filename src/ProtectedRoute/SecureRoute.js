import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const SecureRoute = ({  path, element: Component, isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <Route path={path} element={<Component {...props} />} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default SecureRoute;