import { createSlice } from "@reduxjs/toolkit"
import { albumData } from "../data/album";

const albumSlice = createSlice({
  name: 'album',
  initialState: {
    allAlbums : [],
    currentAlbum : albumData[0].folderName
  },
  reducers: {
    setAllAlbums : (state , action) => {
      state.allAlbums = action.payload;
    },
    setCurrentAlbum : (state , action) => {
      state.currentAlbum = action.payload;
    }
  }
})

export const { setAllAlbums , setCurrentAlbum } = albumSlice.actions;
export default albumSlice.reducer;