import { configureStore } from '@reduxjs/toolkit';
import Slice from './Slice'

const Store = configureStore({
  reducer: {
    login: Slice,
    call: Slice,
    lang: Slice,
    detail: Slice,
    // 모든 reducer를 통합하여 store에 하나의 reducer로 저장
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export default Store;