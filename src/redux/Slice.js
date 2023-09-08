import { createSlice } from '@reduxjs/toolkit';
// api
import { ReadAllPoke, GetSpeciesInfo, ReadPokeDetail } from './api';


// 로그인 상태관리
export const Slice = createSlice({
  name: 'Slice',
  initialState: {value: [false, ]},
  reducers: {
    // 로그인 리듀서
    login: (state, action) => {
      state.value[0] = action.payload;
    },
    // 포켓몬 api 호출
    call: (state, action) => {
      state.value[1] = action.payload;
    },
    // 포켓몬 상세페이지
    detail: (state, action) => {
      state.value[2] = action.payload;
    },
    // 포켓몬 부가정보(한국어 이름)
    species: (state, action) => {
      state.value[3] = action.payload;
    },
    // api limit 개수
    limit: (state, action) => {
      state.value[4] = action.payload;
    }
    
  },
  extraReducers: (builder) => {
    // 포켓몬 api 호출
    builder.addCase(ReadAllPoke.pending, (state) => {
      state.status = 'Loading';
    })
    builder.addCase(ReadAllPoke.fulfilled, (state, action) => {
      state.value[1] = action.payload;
      state.status = 'Complete';
    })
    builder.addCase(ReadAllPoke.rejected, (state) => {
      state.status = 'Fail';
    })
    // 포켓몬 상세정보
    builder.addCase(ReadPokeDetail.pending, (state) => {
      state.status = 'Loading';
    })
    builder.addCase(ReadPokeDetail.fulfilled, (state, action) => {
      state.value[2] = action.payload;
      state.status = 'Complete';
    })
    builder.addCase(ReadPokeDetail.rejected, (state) => {
      state.status = 'Fail';
    })
    // 포켓몬 부가 정보 (한국어 이름)
    builder.addCase(GetSpeciesInfo.pending, (state) => {
      state.status = 'Loading';
    })
    builder.addCase(GetSpeciesInfo.fulfilled, (state, action) => {
      state.value[3] = action.payload;
      state.status = 'Complete';
    })
    builder.addCase(GetSpeciesInfo.rejected, (state) => {
      state.status = 'Fail';
    })
  }
})

export default Slice.reducer;
export const { login, call, detail, species, limit } = Slice.actions;





