import React, { useState } from 'react'
// library
import { HiOutlineSearch } from "react-icons/hi";
// img
import icon from '../../assets/icon_ball_s.png'
import { useNavigate } from 'react-router';

const Search = () => {
  const navigate = useNavigate();
  const [ keyword, setKeyword ] = useState(null);

  const handleSearch = (e) => {
    if(e.keyCode === 13) {
      navigate(`filter/?q=${keyword}`);
    }
  }


  return (
    <div className='search_bar'>
      <h2>
        <img className='ball' src={icon} alt='icon'/>
        포켓몬 도감
      </h2>
      <div className='search'>
        <form onSubmit={e => {e.preventDefault();}}>
          <input 
            placeholder='포켓몬 이름을 검색해주세요' 
            value={keyword || ''}
            onChange={e => setKeyword(e.target.value) }
            onKeyDown={(e)=>{handleSearch(e)}} 
            onFocus={() => setKeyword('')}/>
          <button onClick={()=>{navigate(`filter/?q=${keyword}`);}}><HiOutlineSearch /></button>
        </form>
      </div>

    </div>
  )
}

export default Search
