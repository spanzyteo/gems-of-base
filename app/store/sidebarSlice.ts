import { createSlice } from '@reduxjs/toolkit'

interface SidebarState {
  open: boolean
}

const initialState: SidebarState = {
  open: false,
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSection: (state) => {
      state.open = !state.open
    },
  },
})

export const {toggleSection} = sidebarSlice.actions
export default sidebarSlice.reducer