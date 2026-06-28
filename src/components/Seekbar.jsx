import { useSelector } from "react-redux";
import { useAudioPlayer } from "../hooks/useAudioPlayer";

const Seekbar = () => {

  const { seek } = useAudioPlayer();
  const { currentTime , duration } = useSelector(state => state.player);
  
  return (
    <div className="seekbar">
      <input 
        type="range"
        min="0"
        max={duration || 0} 
        step="1"
        value={currentTime || 0}
        onChange={(e) => seek(Number(e.target.value))}
        style={{ width: '100%', cursor: 'pointer' }}
      />
    </div>
  );
};

export default Seekbar;
