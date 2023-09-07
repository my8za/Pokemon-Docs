import React, { useState } from 'react'

const DetailedSearch = () => {
  const [ fetchNum, setFetchNum ] = useState(150);
  
  return (
    <div className='detailed_search'>
      <div className='container_search'>
        <div className='bx_left'>
        도감번호
        <div className='fetch_num'>
          <div className='num'>1</div>
          <span>-</span>
          <input 
            className='num' 
            type='number'
            value={fetchNum} 
            onChange={(e)=>{setFetchNum(e.target.value)}}/>
        </div>
      </div>
      <ul className='bx_right'>
        <p className='type'>타입</p>
        <li>타입1</li>
        <li>타입2</li>
        <li>타입3</li>
      </ul>
      </div>
      <button className='btn_detail'>
        <p>상세검색</p>
      </button>
    </div>
  )
}

export default DetailedSearch
