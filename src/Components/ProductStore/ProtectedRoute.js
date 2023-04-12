/*import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({component: Component, isAuthenticated, ...props}) => {
    return isAuthenticated ? (
        <Route { ...props } element={ < Component /> }></Route>
    ) : (
        <Navigate to='/login' replace/>
    );
};

export default ProtectedRoute;*/