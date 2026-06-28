import { FaPlay } from "react-icons/fa";
import { setBrowsingSongs, setActiveTab } from "../store/songSlice";
import { useDispatch } from "react-redux";
const Card = ({ album }) => {
  const dispatch = useDispatch();

  const handleAlbumClick = () => {
    dispatch(setBrowsingSongs(album.songs));
    dispatch(setActiveTab("browsing"));
  };

  return (
    <div
      onClick={handleAlbumClick}
      data-folder={album.folderName}
      className="card"
    >
      <div className="outer_div">
        <div className="play">
          <FaPlay color="black" />
        </div>
        <img
          src={`${import.meta.env.BASE_URL}s/${album.folderName}/cover.jpg`}
          alt={album.title}
        />
      </div>
      <h2>{album.title}</h2>
      <p>{album.description}</p>
    </div>
  );
};

export default Card;
