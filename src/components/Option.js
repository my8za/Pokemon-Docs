import React, { useEffect, useState } from 'react'
// redux
import { useDispatch } from 'react-redux';
import { limit } from '../redux/Slice';
// sytle
import '../style/comp.scss';


const Option = () => {
  const dispatch = useDispatch();
  const [ limitNum, setLimitNum ] = useState(150);

  useEffect(()=>{
    dispatch(limit(limitNum))
  }, [dispatch, limitNum])

  return (
    <div className='bx_limit'>
      <p>도감번호</p>
      <div className='limit_num'>
        <div className='num'>1</div>
        <span>-</span>
        <input 
          className='num' 
          type='number'
          value={limitNum} 
          onChange={(e)=>{setLimitNum(e.target.value)}}/>   
      </div>
    </div>
  )
}

export default Option
