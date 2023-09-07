// library
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// url
import { API_URL } from '../utils/constants/Config'; 

// 포켓몬 api 호출
export const ReadAllPoke = createAsyncThunk(
  'get/allPokeon',
  async (fetchNum) => {
    const resp = await axios.get(`${API_URL}/?limit=${fetchNum}`, 
      {
        headers: {
          "Content-Type" : `application/json`,
        },
      });
    return resp.data
    }
);

// 포켓몬 상세 정보 호출
export const ReadPokeDetail = createAsyncThunk(
  'get/pokeDetail',
  async (id) => {
    const resp = await axios.get(`${API_URL}/${id}`, 
      {
        headers: {
          "Content-Type" : `application/json`,
        },
      });
    return resp.data
    }
);

// 포켓몬 부가 정보 + 한국어 이름
export const GetSpeciesInfo = createAsyncThunk(
  'get/speciesInfo',
  async (id) => {
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