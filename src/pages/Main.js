import React, { useEffect, useState } from 'react';
// library
import { useDispatch, useSelector } from 'react-redux';
import { call, lang } from '../redux/Slice';
import axios from 'axios';
// api
import { API_URL } from '../utils/constants/Config';
// components
import PokeCard from '../components/PokeCard';
// style
import '../style/pokemon.scss';

const Main = () => {

  const [ renderList, setRenderList ] = useState([]);
  const [ koNames, setKoNames ] = useState([]);

  // api limit 
  const fetchNum = 150;

  const readAllPoke = async () => {
    let url = `${API_URL}/?limit=${fetchNum}`;
    let resp = await axios.get(url) ;
    let data = resp.data;
    const pokemons = data.results.map((item, idx) => {
      getKorean(idx + 1);
    return {
      // name: koNames[idx]
      name: item?.name,
      id: idx + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx + 1}.png`
    }
  })
  setRenderList(pokemons);
  } 
  
  // 한국어 이름가져오기(미완)
  let test = [];
  const getKorean = async (id) => {
    let url = `${API_URL}-species/${id}`;
    let resp = await axios.get(url);
    let data = await resp.data;
    let { name } = data.names[2];
    test.push(name);
    setKoNames(test)
  }


  // 마운트와 동시에 api호출
  useEffect(()=>{
    readAllPoke();
  }, [])


  return (
    <div>
      <ul className='poke_list'>
        {renderList.map(item => (
          <PokeCard item={item} key={item?.id} />
        ))}
      </ul>
    </div>
  )
}

export default Main;
