import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
  listingModal: boolean
}

const initialState: ModalState = {
  listingModal: true,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeListingModal: (state) => {
      state.listingModal = false
    },
  },
})

export const {closeListingModal} = modalSlice.actions
export default modalSlice.reducer