import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/Slice';

const Login = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector(state => state.login.value[0]);

  // false: 로그아웃상태 / true: 로그인상태
  const [ authenticate, setAuthenticate ] = useState(userStatus);    


  const changeStatus = () => {
    dispatch(login(!authenticate));
    setAuthenticate(!authenticate);
  }
  console.log(authenticate);

  return (
    <div>
      <button onClick={() => {changeStatus()}}>login</button>
    </div>
  )
}

export default Login
