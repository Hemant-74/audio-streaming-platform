import { PiMusicNotes } from "react-icons/pi";
import { IoPlayOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setPlayingSongs, setCurrentSongIndex, setActiveTab} from "../store/songSlice";
import { useAudioPlayer } from "../hooks/useAudioPlayer";

const Song = ({ song, index }) => {
  const dispatch = useDispatch();
  const { loadTrack } = useAudioPlayer();
  const { activeTab, browsingSongs, currentSongIndex , playingSongs } = useSelector(
    (state) => state.song,
  );

  const handleSongClick = (index) => {
    if (activeTab === "browsing") {
      dispatch(setPlayingSongs(browsingSongs));
      dispatch(setActiveTab("playing"));
    }
    dispatch(setCurrentSongIndex(index));

    const currentList = activeTab === 'browsing' ? browsingSongs : playingSongs;
    const targetSong = currentList[index];
    const songUrl = `${import.meta.env.BASE_URL}s/${targetSong.folderName}/${targetSong.title}.mp3`;

    loadTrack(songUrl);
  };
  return (
    <li onClick={() => handleSongClick(index)}>
      <PiMusicNotes size={40} color="white" />
      <div className="info">
        <div>{song.title}</div>
        <div>{song.artist}</div>
      </div>
      <div className="playnow">
        <span>Play Now</span>
        <IoPlayOutline size={24} color="white" />
      </div>
    </li>
  );
};

export default Song;
