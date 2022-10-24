import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";


const useAuth = () => {
  const query = useQuery();
  let token = query.get('token')
  if(token){
    localStorage.setItem('accessToken', `Bearer ${token}`)
  }
  const user = localStorage.getItem('accessToken');
  return user && true;
}

const ProptectRoutes = () => {
  const isAuth = useAuth();
  return true ? <Outlet/> : <Navigate to='/'/>
}

export default ProptectRoutes;