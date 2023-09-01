import React from 'react'
// library
import {
  AiFillHeart
} from "react-icons/ai";

const DetailBorad = ({
  data
}) => {
  console.log(data)
  console.log(test)
  const img_src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data?.id}.png`;
  return ( <
    div className = 'container' >
    <
    div className = 'info' >
    <
    img src = {
      img_src
    }
    alt = 'pokemon' / >
    <
    /div> <
    div className = 'info' >
    <
    p className = 'poke_id' > No. {
      data ? .id
    } < /p> <
    p className = 'poke_name' > {
      data ? .species.name
    } < /p> <
    p className = 'poke_prop' > 속성 < /p> <
    p className = 'poke_descript' > 설명 < /p> <
    div >
    타입 키 분류 <
    /div> <
    div className = 'btn_like' >
    <
    p >
    <
    AiFillHeart / >
    <
    span > 좋아요 < /span> <
    /p> <
    /div> <
    /div> <
    /div>
  )
}

export default DetailBorad;