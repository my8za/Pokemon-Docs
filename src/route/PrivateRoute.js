import React from 'react'
// library
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux'
// pages
import Like from '../pages/Like';


// 로그아웃 상태에서 포켓몬 즐겨찾기 페이지에 접근하면 '/login'경로로 이동
const PrivateRoute = () => {
  const userStatus = useSelector(state => state.login.value[0]);
  return userStatus? <Like /> : <Navigate to='/login' />
}

export default PrivateRoute;

