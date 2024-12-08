import { createSlice } from '@reduxjs/toolkit'

interface DarkModeState {
  darkMode: boolean
}

const initialState: DarkModeState = {
  darkMode: false,
}

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    openLightMode: (state) => {
      state.darkMode = false
    },
    openDarkMode: (state) => {
      state.darkMode = true
    },
  },
})

export const {openDarkMode, openLightMode} = darkModeSlice.actions
export default darkModeSlice.reducer