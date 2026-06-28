import { MdSkipPrevious } from "react-icons/md";
import { BiSkipNext } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { useAudioPlayer } from "../hooks/useAudioPlayer";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSongIndex } from "../store/songSlice";
import { setIsTrackEnded } from "../store/playerSlice";
import { useEffect } from "react";

const SongControl = () => {
  const dispatch = useDispatch();
  const { loadTrack, togglePlay } = useAudioPlayer();
  const { isPlaying , isTrackEnded } = useSelector((state) => state.player);
  const { playingSongs, currentSongIndex } = useSelector((state) => state.song);

  const handleNext = () => {
    if (playingSongs.length == 0) return;

    let nextIndex = currentSongIndex + 1;
    if (nextIndex == playingSongs.length) {
      nextIndex = 0;
    }

    playNewSong(nextIndex);
  };

  const handlePrevious = () => {
    if (playingSongs.length == 0) return;

    let previousIndex = currentSongIndex - 1;
    if (previousIndex == -1) {
      previousIndex = playingSongs.length - 1;
    }

    playNewSong(previousIndex);
  };

  const playNewSong = (newIndex) => {
    dispatch(setCurrentSongIndex(newIndex));

    const newSong = playingSongs[newIndex];
    const songUrl = `${import.meta.env.BASE_URL}s/${newSong.folderName}/${newSong.title}.mp3`;
    loadTrack(songUrl);
  };

  useEffect(() => {
    if(isTrackEnded) {
      handleNext();
      dispatch(setIsTrackEnded(false));
    }
  } , [isTrackEnded , currentSongIndex , playingSongs]);

  return (
    <div className="songbuttons">
      <MdSkipPrevious
        onClick={handlePrevious}
        style={{ background: "none", border: "none", cursor: "pointer" }}
        size={32}
        color="black"
      />
      {!isPlaying ? (
        <FaPlay
          onClick={togglePlay}
          style={{ background: "none", border: "none", cursor: "pointer" }}
          size={20}
          color="black"
        />
      ) : (
        <FaPause
          onClick={togglePlay}
          style={{ background: "none", border: "none", cursor: "pointer" }}
          size={24}
          color="black"
        />
      )}
      <BiSkipNext
        onClick={handleNext}
        style={{ background: "none", border: "none", cursor: "pointer" }}
        size={32}
        color="black"
      />
    </div>
  );
};

export default SongControl;
