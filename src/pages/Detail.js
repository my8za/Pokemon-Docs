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
import { useDispatch, useSelector } from 'react-redux';
import { ReadPokeDetail } from '../redux/api';

const Detail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const detailData = useSelector(state => state.detail.value[4]);

  useEffect(() => {
    dispatch(ReadPokeDetail(id));
  }, [dispatch])

  return (
    <div className='detail'>
      <DetailBorad data={detailData}/>
    </div>
  )
}

export default Detail
