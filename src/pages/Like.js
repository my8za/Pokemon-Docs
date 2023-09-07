import React, { useContext } from 'react'
// context
import { PokeContext } from '../context/PokeContext';
import PokeCard from '../components/PokeCard';

const Like = () => {
  const contextData = useContext(PokeContext);
  const likeList = contextData.likeList;

  const likePoke = likeList?.map(item => {
    return {
      name: item.name,
      id: item.id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`
    }
  })

  return (
    <div>
      <ul className='poke_list'>
        {likePoke?.map(item => (
          <PokeCard item={item} key={item?.id}/>
        ))}
      </ul>
    </div>
  )
}

export default Like
