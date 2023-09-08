import React, { useEffect } from 'react';
// library
import { useDispatch, useSelector } from 'react-redux';
// redux_api
import { ReadAllPoke } from '../redux/api';
// components
import PokeCard from '../components/PokeCard';
import Option from '../components/Option';
// style
import '../style/pokemon.scss';

const Main = () => {
  const dispatch = useDispatch();  
  // api limit 
  const limitNum = useSelector(state => state.limit.value[4]);
  // 포켓몬 데이터
  const pokeData = useSelector(state => state.call.value[1]);
  const pokemons = pokeData?.results.map((item, idx) => {
    return {
      name: item.name,
      id: idx + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx + 1}.png`
    }
  });


  // 마운트와 동시에 api호출
  useEffect(()=>{
    dispatch(ReadAllPoke(limitNum));
  }, [dispatch, pokemons, limitNum])


  return (
    <div className='main_section'>
      <Option />
      <ul className='poke_list'>
        {pokemons?.map(item => (
          <PokeCard item={item} key={item?.id} />
        ))}
      </ul>
    </div>
  )
}

export default Main;
