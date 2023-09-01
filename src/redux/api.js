// library
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// url
import { API_URL } from '../utils/constants/Config'; 

// 포켓몬 api 호출
export const ReadAllPoke = createAsyncThunk(
  'get/allPokeon',
  async () => {
    const resp = await axios.get(API_URL, 
      {
        headers: {
          "Content-Type" : `application/json`,
        },
      }
      );
      console.log('api call')
      return resp.data
    }
);



// 한국어 이름가져오기
export const GetKorean = createAsyncThunk(
  async (id) => {
    console.log(id + '-ing')
    const url = `https://pokeapi.co/api/v2/pokemon-species/`;
    const resp = await axios.get(url + {id}, 
      {
        headers: {
          "Content-Type" : `application/json`,
        },
      }
    );
    return resp.data;
  }  
);