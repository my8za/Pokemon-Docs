import React, { useContext, useEffect, useState } from 'react'
// context
import { PokeContext } from '../context/PokeContext';
// library
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// redux
import { useDispatch, useSelector } from 'react-redux';
import { GetSpeciesInfo } from '../redux/api';
// style
import '../style/color.scss';
// img

const DetailBoard = ({data}) => {
  const dispatch = useDispatch();
  const img_src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data?.id}.png`;
  const types = data?.types;
  // 포켓몬 부가 정보 가져오기
  const speciesData = useSelector(state=>state.species.value[3]);

  useEffect(() => {
    dispatch(GetSpeciesInfo(data?.id))
  }, [dispatch, data]);

  // 좋아요 누른 포켓몬 배열 
  const { likeList, setLikeList } = useContext(PokeContext);
  // 좋아요 여부 상태
  let mode = false;
  likeList?.map(item => {
    if(item.id === data?.id) {
      mode = true;
    }
  });
  const [ checkIcon, setCheckIcon ] = useState(mode);



  // 좋아요 해제
  const handleClickFill = () => {
    setCheckIcon(!checkIcon)
    setLikeList(likeList.filter(item => item.id !== data?.id));
  }
  // 좋아요 지정
  const handleClickEmpty = () => {
    setCheckIcon(!checkIcon)
    setLikeList(likeList.concat(data));
  }

  return (
    <div className='container'>
      <div className='info_img'>
        <img src={img_src} alt='pokemon'/>
      </div>
      <div className='info'>
        <p className='poke_id'>No.{data?.id}</p>
        <p className='poke_name'>{data?.species.name}</p>
        <ul className='poke_types'>
          {types?.map((item, idx) => (
            <li className={item?.type.name} key={idx}>
              {item?.type.name}
            </li>
          ))}
        </ul>
        <p className='poke_descript'>{speciesData?.flavor_text_entries[0].flavor_text}</p>
        <ul className='poke_imgs'>
          <li><img src={data?.sprites.front_default} alt='img'/></li>
          <li><img src={data?.sprites.back_default} alt='img'/></li>
          <li>{data?.sprites.front_female ? <img src={data?.sprites.front_female} alt='img'/> : <img src={data?.sprites.front_shiny} alt='img'/>}</li>
          <li>{data?.sprites.front_female ? <img src={data?.sprites.back_female} alt='img'/> : <img src={data?.sprites.back_shiny} alt='img'/>}</li>
        </ul>
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

export default DetailBoard;