import { configureStore } from '@reduxjs/toolkit'
import getPostsSlice from '../modules/getPosts'
import writeAPostSlice from '../modules/writeAPost'
import detailModalToggleSlice from '../modules/detailSwitch'
import detailDataFetchSlice from '../modules/detailDataFetch'

const store = configureStore({
  reducer: {
    getPosts: getPostsSlice.reducer,
    postAPost: writeAPostSlice.reducer,
    detailPost: detailModalToggleSlice.reducer,
    detailFetcher: detailDataFetchSlice.reducer,
  },
  devTools: process.env.BASE_URL !== 'production', // 개발 환경에서만 Redux DevTools를 활성화
})

export default store
