import React from 'react'
import { useNavigate } from 'react-router'

const PokeCard = ({item}) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/pokemon/${item?.id}`);
  }

  return (
    <li className='poke_card' onClick={goToDetail} >
      <img src={item?.img} alt='pokemon' />
      <article className='bx_txt'>
        <p className='poke_id'>No.{item?.id}</p>
      <p className='poke_name'>{item?.name}</p>
      </article>
    </li>
  )
}

export default PokeCard
