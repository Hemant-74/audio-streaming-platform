import Seekbar from "./Seekbar";
import SongControl from "./SongControl";
import SongInfo from "./SongInfo";
import TimeVolume from "./TimeVolume";

const MusicPlayer = () => {
  return (
    <>
      <div className="playbar">
        <div className="abovebar">
          <SongInfo></SongInfo>
          <SongControl></SongControl>
          <TimeVolume></TimeVolume>
        </div>
        <Seekbar></Seekbar>
      </div>
    </>
  );
};

export default MusicPlayer;
