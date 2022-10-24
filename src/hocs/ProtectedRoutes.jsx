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
  const isAuth = useAuth(); // проверяю авторизацию
  return true ? <Outlet/> : <Navigate to='/auth'/> // TRUE затычка. На его месте будет isAuth.
}

export default ProptectRoutes;