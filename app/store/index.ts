import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './sidebarSlice'
import modalReducer from './modalSlice'
import darkModeReducer from './darkModeSlice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    modal: modalReducer,
    darkMode: darkModeReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
