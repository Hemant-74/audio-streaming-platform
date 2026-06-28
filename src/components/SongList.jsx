import { useDispatch, useSelector } from "react-redux";
import Song from "./Song";
import { setPlayingSongs } from "../store/songSlice";

const SongList = () => {

  const { playingSongs , browsingSongs , activeTab } = useSelector(state => state.song);
  const currentList = (activeTab === 'playing' ? playingSongs : browsingSongs);

  return (
    <div className="songList">
      <ul>
        {currentList.length === 0 ? (
          <p>No songs to display.</p>
        ) : (
        currentList.map((song , index) => (
          <Song index = {index} key={song.id} song = {song} ></Song>
        )))
      }
      </ul>
    </div>
  );
};

export default SongList;