import { createSlice } from "@reduxjs/toolkit";
import { albumData } from "../data/album";

const defaultSongs =  albumData[0].songs;

const songSlice = createSlice({
  name : 'songs',
  initialState : {
    playingSongs : defaultSongs,
    browsingSongs : defaultSongs,
    activeTab : 'playing',
    currentSongIndex : 0
  },
  reducers : {
    setPlayingSongs : (state , action) => {
      state.playingSongs = action.payload;
    },
    setBrowsingSongs : (state , action) => {
      state.browsingSongs = action.payload;
    },
    setActiveTab : (state , action) => {
      state.activeTab = action.payload;
    },
    setCurrentSongIndex : (state , action) => {
      state.currentSongIndex = action.payload;
    }
  }
})

export const { setPlayingSongs , setBrowsingSongs , setActiveTab , setCurrentSongIndex } = songSlice.actions;
export default songSlice.reducer;