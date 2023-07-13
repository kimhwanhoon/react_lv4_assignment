import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../axios/api'

export const __getPosts = createAsyncThunk(
  'getPosts',
  async (payload, thunkAPI) => {
    try {
      const res = (await api('/posts')).data
      return res
    } catch (error) {
      console.log(error)
    }
  }
)

const content = {
  name: 'get posts',
  initialState: {
    posts: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getPosts.pending, (state, action) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(__getPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.posts = action.payload
      })
      .addCase(__getPosts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      })
      .addDefaultCase((state, action) => {
        return state
      })
  },
}

const getPostsSlice = createSlice(content)

export default getPostsSlice
export const { getPosts } = getPostsSlice.actions
