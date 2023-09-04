import { current } from '@reduxjs/toolkit';
import React, { useState } from 'react'
// library
import { useNavigate } from 'react-router'

const SignUp = () => {
  const navigate = useNavigate();

  const [ userForm, setUserForm ] = useState({
    email: '',
    password: ''
  });

  // 유효성 검사
  const [ permitEmail, setPermitEmail ] = useState(false);
  const [ permitPassword, setPermitPassword ] = useState(false);

  const onChangeEmail = (e) => {
    const currentValue = e.target.value;
    setUserForm({...userForm, email: currentValue});
    // 이메일 '@' 포함
    const regExp = /@/;
    regExp.test(currentValue) ? setPermitEmail(true) : setPermitEmail(false)
  }

  const onChangePW = (e) => {
    const currentValue = e.target.value;
    setUserForm({...userForm, password: currentValue});
    // 비밀번호 8자 이상
    const regExp = /^[A-Za-z0-9]{8,}$/;
    regExp.test(currentValue) ? setPermitPassword(true) : setPermitPassword(false)
  }


  // 로컬스트로지 저장
  const saveLocalStorage = (form) => {
    console.log(form);
    localStorage.setItem('id', form.email);
    localStorage.setItem('pw', form.password);
  }

  // 가입버튼 클릭
  const handleClickSignUp = (e) => {
    e.preventDefault();
    saveLocalStorage(userForm)
    navigate('/login')
  }

  return (
    <div className='sign'>
      <div className='container_signup'>
        <h2>회원가입 &#128522;</h2>
        <form onSubmit={e => {handleClickSignUp(e)}}>
          <div>
            <label className='input_label'>이메일</label>
            <input 
              className='input_area' 
              placeholder='이메일 주소'
              onChange={e => {onChangeEmail(e)}}/>
          </div>
          <div>
            <label className='input_label'>비밀번호</label>
            <input 
              className='input_area'
              type='password'
              placeholder='비밀번호' 
              onChange={e => {onChangePW(e)}} />
          </div>
          <button 
            className='btn-skew'
            disabled={!(permitEmail && permitPassword)}
          ><p>가입</p></button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
