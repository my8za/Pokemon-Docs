import React from 'react'
import { useSelector } from 'react-redux'

const Like = () => {
  const likeData = useSelector(state=> state.like.value[3]);
  console.log(likeData,' in Like.js')
  return (
    <div>
    </div>
  )
}

export default Like
