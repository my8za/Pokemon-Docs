import React, { useEffect, useState } from 'react';
// library
import { useDispatch, useSelector } from 'react-redux';
import { GetKorean, ReadAllPoke } from '../redux/api';
import axios from 'axios';
// api
import { API_URL } from '../utils/constants/Config';
// components
import PokeCard from '../components/PokeCard';
// style
import '../style/pokemon.scss';
import { useSearchParams } from 'react-router-dom';

const Main = () => {
  let dispatch = useDispatch();  
  const [ renderList, setRenderList ] = useState([]);
  const [ query, setQuery ] = useSearchParams();
  const searchKeyword = query.get('q') || '';
  // api limit 
  const fetchNum = 150;
  
  // 한국어 이름가져오기(미완)
  // const getKorean = (id) => {
  //   dispatch(GetKorean(id))
  // }
  const koNames = useSelector(state => state.lang.value[2]);
  console.log(koNames)

  // 포켓몬 데이터
  const pokeData = useSelector(state => state.call.value[1]);
  const pokemons = pokeData?.results.map((item, idx) => {
      // getKorean(idx + 1);
    return {
      name: item?.name,
      id: idx? idx + 1 : null,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx + 1}.png`
    }
  });

  
  // 마운트와 동시에 api호출
  useEffect(()=>{
    dispatch(ReadAllPoke(fetchNum));
    setRenderList(pokemons);
  }, [])


  return (
    <div>
      <ul className='poke_list'>
        {renderList && renderList.map(item => (
          <PokeCard item={item} key={item?.id} />
        ))}
      </ul>
    </div>
  )
}

export default Main;
