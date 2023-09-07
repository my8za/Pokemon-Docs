import React from 'react'
// footer logo
import ft_logo from '../assets/ft_logo.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='ft_nav'>
        <h2>
          <a href='https://pokemonkorea.co.kr/' target='_blank'>
            <img src={ft_logo} alt='pokemon_korea'/>
          </a>
        </h2>
        <ul>
          <li><a href='https://github.com/my8za' target='_blank'>GitHub</a></li>
          <li><a href='https://velog.io/@my8za' target='_blank'>Velog</a></li>
        </ul>
      </div>
      <p>본 페이지는 상업적 목적이 아닌 포트폴리오 용도로 제작되었으며, 
      디자인은 포켓몬 공식사이트를 참고하였습니다.</p>
    </footer>
  )
}

export default Footer
