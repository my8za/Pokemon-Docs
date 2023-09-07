import React, { useEffect } from 'react'
// library
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
// redux_api
import { ReadPokeDetail } from '../redux/api';
// components
import DetailBoard from '../components/DetailBoard';
// style
import '../style/pokemon.scss';

const Detail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const detailData = useSelector(state => state.detail.value[3]);

  useEffect(() => {
    dispatch(ReadPokeDetail(id));
  }, [dispatch, id])

  return (
    <div className='detail'>
      <DetailBoard data={detailData}/>
    </div>
  )
}

export default Detail
