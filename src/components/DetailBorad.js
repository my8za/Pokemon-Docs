import React, { useState, useEffect } from 'react'
// redux
import { useSelector, useDispatch } from 'react-redux';
import { like } from '../redux/Slice';
// library
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const DetailBorad = ({data}) => {
  const dispatch = useDispatch();
  const img_src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data?.id}.png`;

  let mode = false;
  const [ checkIcon, setCheckIcon ] = useState(mode);
  const [ likeList, setLikeList ] = useState([]);
  const likeData = useSelector(state => state.like.value[3]);

  useEffect(() => {
    setLikeList(likeList.concat(likeData));
  }, []);

  likeList.map(item => {
    console.log(item);
  })


  // 좋아요 해제
  const handleClickFill = () => {
      setCheckIcon(!checkIcon);
      // setLikeList(likeList.filter())
      dispatch(like(likeList));
  }
  // 좋아요 지정
  const handleClickEmpty = () => {
      setCheckIcon(!checkIcon);
      setLikeList(likeList.concat(data));
      dispatch(like(likeList))
  }
  

  return (
    <div className='container'>
      <div className='info'>
        <img src={img_src} alt='pokemon'/>
      </div>
      <div className='info'>
        <p className='poke_id'>No.{data?.id}</p>
        <p className='poke_name'>{data?.species.name}</p>
        <p className='poke_prop'>속성</p>
        <p className='poke_descript'>설명</p>
        <div>
          타입 키 분류
        </div>
        <div className='btn_like'>
          <p>
            {checkIcon ? 
                <AiFillHeart onClick={handleClickFill}/> 
                : <AiOutlineHeart onClick={handleClickEmpty}/>
            }
            <span>좋아요</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default DetailBorad;