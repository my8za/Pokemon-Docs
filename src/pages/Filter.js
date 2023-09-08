import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import PokeCard from '../components/PokeCard';
// library
import { TbMoodSadSquint } from "react-icons/tb";
// style
import '../style/pokemon.scss';

const Filter = () => {
    // 검색키워드
  const [ query, setQuery ] = useSearchParams();
  let searchPoke = query?.get('q') || '';
  const [ search, setSearch ] = useState([]);


  // 포켓몬 데이터
  const pokeData = useSelector(state => state.call.value[1]);
  const pokemons = pokeData?.results.map((item, idx) => {
    return {
      name: item.name,
      id: idx + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx + 1}.png`
    }
  });

  useEffect(()=>{
    setSearch(pokemons?.filter(item => item.name.includes(searchPoke)));
  }, [query])

  return (
    <div className='wrap'>
      <ul className='poke_list'>
        {search?.map(item => (
          <PokeCard item={item} key={item?.id} />
        ))}
        {search?.length === 0 ? (<div className='no_results'><TbMoodSadSquint className='icon'/><p>검색결과가 없습니다</p></div>) : ''}
      </ul>
    </div>
  )
}

export default Filter
