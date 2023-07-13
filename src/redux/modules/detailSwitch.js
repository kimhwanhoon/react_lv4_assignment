import { createSlice } from '@reduxjs/toolkit'

const content = {
  name: 'detail switch',
  initialState: {
    detailModalSwitch: false,
  },
  reducers: {
    detailModalToggler: (state, action) => {
      return { ...state, detailModalSwitch: action.payload }
    },
  },
}

const detailModalToggleSlice = createSlice(content)

export default detailModalToggleSlice
export const { detailModalToggler } = detailModalToggleSlice.actions
