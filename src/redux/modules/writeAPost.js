import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../axios/api'

export const __writeAPost = createAsyncThunk(
  'writeAPost',
  async (payload, thunkAPI) => {
    try {
      await api.post('/posts', payload)
      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const content = {
  name: 'Write a post',
  initialState: {
    post: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__writeAPost.pending, (state, action) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(__writeAPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.posts = action.payload
      })
      .addCase(__writeAPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      })
      .addDefaultCase((state, action) => {
        return state
      })
  },
}

const writeAPostSlice = createSlice(content)

export default writeAPostSlice
export const { writeAPost } = writeAPostSlice.actions
