// library
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// url
import { API_URL } from '../utils/constants/Config'; 

// 포켓몬 api 호출
export const ReadAllPoke = createAsyncThunk(
  'get/allPokeon',
  async (fetchNum) => {
    console.log('api call')
    const resp = await axios.get(`${API_URL}/?limit=${fetchNum}`, 
      {
        headers: {
          "Content-Type" : `application/json`,
        },
      });
    console.log(resp.data)
    return resp.data
    }
);



// 한국어 이름가져오기
export const GetKorean = createAsyncThunk(
  'get/KoreanName',
  async (id) => {
    console.log('한국어 이름 호출', id)
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
    const resp = await axios.get(url, 
      {
        headers: {
          "Content-Type" : `application/json`,
        },
      }
    );
    return resp.data;
  }  
);