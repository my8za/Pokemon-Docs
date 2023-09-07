import { createSlice } from '@reduxjs/toolkit';
// api
import { ReadAllPoke, GetKorean, ReadPokeDetail } from './api';


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
    // 한국어 이름 가져오기
    lang: (state, action) => {
      state.value[2] = action.payload;
    },
    // 포켓몬 상세페이지
    detail: (state, action) => {
      state.value[3] = action.payload;
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
    // 한국어 이름 가져오기기
    builder.addCase(GetKorean.pending, (state) => {
      state.status = 'Loading';
    })
    builder.addCase(GetKorean.fulfilled, (state, action) => {
      state.value[2] = action.payload;
      state.status = 'Complete';
    })
    builder.addCase(GetKorean.rejected, (state) => {
      state.status = 'Fail';
    })
    // 포켓몬 상세정보
    builder.addCase(ReadPokeDetail.pending, (state) => {
      state.status = 'Loading';
    })
    builder.addCase(ReadPokeDetail.fulfilled, (state, action) => {
      state.value[3] = action.payload;
      state.status = 'Complete';
    })
    builder.addCase(ReadPokeDetail.rejected, (state) => {
      state.status = 'Fail';
    })
  }
})

export default Slice.reducer;
export const { login, call, lang, detail } = Slice.actions;





