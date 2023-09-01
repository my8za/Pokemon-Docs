import React from 'react'
// library
import { HiOutlineSearch } from "react-icons/hi";
// img
import icon from '../assets/icon_ball_s.png'

const Search = () => {
  const handleSearch = (e) => {
    if(e.keyCode === 13) {
      let keyword = e.target.value;
      console.log(keyword)
    }
  }

  return (
    <div className='search_bar'>
      <h2>
        <img className='ball' src={icon} alt='icon'/>
        포켓몬 도감
      </h2>
      <div className='search'>
        <input placeholder='포켓몬 이름을 입력해주세요.' onKeyDown={(e)=>{handleSearch(e)}}/>
        <button><HiOutlineSearch /></button>
      </div>

    </div>
  )
}

export default Search
