import React, { useEffect, useState } from 'react'
// library
import { useParams } from 'react-router'
import axios from 'axios';
// components
import DetailBorad from '../components/DetailBorad';
// style
import '../style/pokemon.scss';
// api
import { API_URL } from '../utils/constants/Config';

const Detail = () => {
  let { id } = useParams();

  const [ selected, setSelected ] = useState(null);
  const getPokeDetail = async() => {
    let url = `${API_URL}/${id}`;
    let resp = await axios.get(url);
    let data = await resp.data;
    setSelected(data);
  }

  useEffect(() => {
    getPokeDetail();
  }, [])

  return (
    <div className='detail'>
      <DetailBorad data={selected}/>
    </div>
  )
}

export default Detail
