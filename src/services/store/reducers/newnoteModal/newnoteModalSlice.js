import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newNoteModalState: false,
  newNoteModalButtonState: true,
};

export const newnoteModalSlice = createSlice({
  name: "newnoteModalSlice",
  initialState,
  reducers: {
    newNoteModalStateUpdate: (state, action) => {
      state.newNoteModalState = action.payload;
    },
    newNoteModalButtonStateUpdate: (state, action) => {
      state.newNoteModalButtonState = action.payload;
    },
  },
});


export const {newNoteModalStateUpdate, newNoteModalButtonStateUpdate} = newnoteModalSlice.actions

export default newnoteModalSlice.reducer