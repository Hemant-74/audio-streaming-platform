import { useSelector } from "react-redux";

const SongInfo = () => {
  const { playingSongs, currentSongIndex } = useSelector((state) => state.song);

  const currentSong =
    playingSongs.length > 0 ? playingSongs[currentSongIndex] : null;

  return (
    <>
      {currentSong ? <div className="songinfo">{currentSong.title}</div> : ""}
    </>
  );
};

export default SongInfo;
