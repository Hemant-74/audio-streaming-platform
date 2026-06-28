import Header from "./Header";
import Playlist from "./Playlist";
import MusicPlayer from "./MusicPlayer";

const RightSide = () => {
  return (
    <>
      <div className="right bg-grey rounded">
        <Header></Header>
        <Playlist></Playlist>
        <MusicPlayer></MusicPlayer>
      </div>
    </>
  );
};

export default RightSide;
