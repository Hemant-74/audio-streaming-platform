import { FaVolumeUp } from "react-icons/fa";
import { IoVolumeMuteSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setLastVolume, setVolume } from "../store/playerSlice";
import { useAudioPlayer } from "../hooks/useAudioPlayer";

const Volume = () => {
  const dispatch = useDispatch();
  const { volume , lastVolume } = useSelector(state => state.player);
  const { changeVolume } = useAudioPlayer();

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    changeVolume(newVolume);
  }

  const toggleVolume = () => {
    if(volume !== 0){
      dispatch(setLastVolume(volume));
      changeVolume(0);
    }else{
      changeVolume(lastVolume);
    }
  }

  return (
    <div className="volume">
      {volume === 0 ? (<IoVolumeMuteSharp onClick={toggleVolume} size={24} color="black" />) : (<FaVolumeUp onClick={toggleVolume} size={24} color="black" />)}
      <div className="range">
        <input
          onChange={handleVolumeChange}
          min="0"
          max="1"
          step="0.01"
          type="range"
          name="volume"
          value={volume}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default Volume;
