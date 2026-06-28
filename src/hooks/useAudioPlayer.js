import { useEffect, useRef } from "react"
import { useDispatch } from 'react-redux';
import { setIsPlaying , setDuration , setVolume , setCurrentTime , setIsTrackEnded } from "../store/playerSlice";

const audio = new Audio();
let listenerAttached = false;

export const useAudioPlayer = (initialValue) => {
  const dispatch = useDispatch();

  const togglePlay = () => {
    if(audio){
      if(audio.paused){
        audio.play();
        dispatch(setIsPlaying(true));
      }else{
        audio.pause();
        dispatch(setIsPlaying(false));
      }
    }else{
      console.log('No song is playing');
    }
  }

  const loadTrack = (trackUrl) => {
    if(audio.src !== trackUrl) {
      audio.src = trackUrl;
    }
    audio.play();
    dispatch(setIsPlaying(true));
  }

  const changeVolume = (newVolume) => {
    audio.volume = newVolume;
    dispatch(setVolume(newVolume));
  }

  const seek = (time) => {
    audio.currentTime = time;
    dispatch(setCurrentTime(time));
  }

  useEffect(() => {

    if(!listenerAttached){
      const handleTimeUpdate = () => {
        dispatch(setCurrentTime(audio.currentTime));
      };

      const handleDuration = () => {
        dispatch(setDuration(audio.duration));
      }
      
      const handleTrackEnded = () => {
        dispatch(setIsTrackEnded(true));
      }

      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleDuration);
      audio.addEventListener('ended', handleTrackEnded)

      listenerAttached = true;
    }
  } , [dispatch]);

  return { togglePlay , loadTrack , changeVolume , seek};
};