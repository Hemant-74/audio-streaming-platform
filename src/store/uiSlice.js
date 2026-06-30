import { createSlice } from "@reduxjs/toolkit";
import { GiConsoleController } from "react-icons/gi";

const uiSlice = createSlice({
  name : 'ui',
  initialState : {
    isLibraryOpen : false,
    isMobileView : window.innerWidth < 1200
  },
  reducers : {
    toggleLibrary : (state) => {
      console.log("hello")
      console.log(state.isLibraryOpen);
      state.isLibraryOpen = !state.isLibraryOpen;
    },
    closeLibrary : (state) => {
      console.log("closing");
      state.isLibraryOpen = false;
    },
    setIsMobileView : (state , action) => {
      state.isMobileView = action.payload;

      if(!action.payload && state.isLibraryOpen){
        state.isLibraryOpen = false;
      }
    }
  }
})

export const {toggleLibrary , closeLibrary , setIsMobileView} = uiSlice.actions;
export default uiSlice.reducer;