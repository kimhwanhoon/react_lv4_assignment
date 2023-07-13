import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../axios/api'

export const __editAPost = createAsyncThunk(
  'editAPost',
  async (payload, thunkAPI) => {
    try {
      await api.patch(`/posts/${payload.id}`, payload.newData)
      return payload.id
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const content = {
  name: 'Edit a post',
  initialState: {
    post: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__editAPost.pending, (state, action) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(__editAPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.posts = action.payload
      })
      .addCase(__editAPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      })
      .addDefaultCase((state, action) => {
        return state
      })
  },
}

const editAPostSlice = createSlice(content)

export default editAPostSlice
export const { editAPost } = editAPostSlice.actions
