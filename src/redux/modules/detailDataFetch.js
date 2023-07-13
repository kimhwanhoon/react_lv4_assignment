import { createSlice } from '@reduxjs/toolkit'

const content = {
  name: 'detail data fetch',
  initialState: {
    author: '',
    content: '',
    date: '',
    id: '',
    title: '',
  },
  reducers: {
    detailDataFetcher: (state, action) => {
      return action.payload
    },
  },
}

const detailDataFetchSlice = createSlice(content)

export default detailDataFetchSlice
export const { detailDataFetcher } = detailDataFetchSlice.actions
