import React, { useState } from 'react'
// library
import { useNavigate } from 'react-router';
// redux
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/Slice';
// style
import '../style/sign.scss';
// img
import logo from '../assets/main_logo.png';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [ email, setEmail ] = useState(null);
  const [ password, setPassword ] = useState(null);

  // false: 로그아웃상태 / true: 로그인상태
  const userStatus = useSelector(state => state.login.value[0]);
  const [ authenticate, setAuthenticate ] = useState(userStatus);    


  // 로그인버튼 클릭
  // 로컬 스토리지에 저장된 user 정보확인
  const handleClickLogin = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('id');
    const userPw = localStorage.getItem('pw');
    if(userId === email && userPw === password) {
      // 로그인 성공
      setAuthenticate(!authenticate);
      dispatch(login(!authenticate));
      navigate('/')
    } else {
      // 로그인 실패
      alert('로그인을 실패하였습니다. 아이디와 비밀번호를 확인해주세요')
    }
  }


  return (
    <div className='sign'>
      <div className='container_login'>
        <h2><img width={200} src={logo} alt='logo'/></h2>
        <form onSubmit={(e)=>{handleClickLogin(e)}}>
          <div>
            <label className='input_label'>이메일</label>
            <input 
              className='input_area' 
              placeholder='이메일'
              onChange={e => {setEmail(e.target.value)}}/>
          </div>
          <div>
            <label className='input_label'>비밀번호</label>
            <input 
              className='input_area' 
              type='password' 
              placeholder='비밀번호' 
              onChange={e => setPassword(e.target.value)}/>
          </div>
          <button className='btn-skew'><p>로그인</p></button>
        </form>
        <button className='btn-move' onClick={(e)=>{navigate('/signup')}}>
          <span>아직 회원이 아니신가요?</span>
        </button>
      </div>
    </div>
  )
}

export default Login;
