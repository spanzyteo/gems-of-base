import { createSlice } from '@reduxjs/toolkit'

interface SidebarState {
  open: boolean
  switch: boolean
}

const initialState: SidebarState = {
  open: false,
  switch: false
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSection: (state) => {
      state.open = !state.open
    },
    toggleSwitch: (state) => {
      state.switch = !state.switch
    }
  },
})

export const {toggleSection, toggleSwitch} = sidebarSlice.actions
export default sidebarSlice.reducer