import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';
const ProtectedRoute = () => {
  const {loading, isAuthenticated, user} = useSelector((state)=>state.user);
 
    return ( !loading &&(isAuthenticated?<Outlet/>:<Navigate to="/login"/>))
};

export default ProtectedRoute
