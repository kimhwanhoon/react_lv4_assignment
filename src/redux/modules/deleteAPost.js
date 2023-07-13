import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../axios/api'

export const __deleteAPost = createAsyncThunk(
  'deleteAPost',
  async (payload, thunkAPI) => {
    try {
      await api.delete(`/posts/${payload}`)
      return payload.id
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const content = {
  name: 'Delete a post',
  initialState: {
    post: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__deleteAPost.pending, (state, action) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(__deleteAPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.posts = action.payload
      })
      .addCase(__deleteAPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      })
      .addDefaultCase((state, action) => {
        return state
      })
  },
}

const deleteAPostSlice = createSlice(content)

export default deleteAPostSlice
export const { editAPost } = deleteAPostSlice.actions
