import { BiLibrary } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../store/songSlice";
const Home = () => {
  const { activeTab } = useSelector((state) => state.song);
  const dispath = useDispatch();

  return (
    <>
      <div className="heading">
        <BiLibrary
          className="text-white flex-shrink-0"
          size={24}
          style={{ minWidth: "24px" }}
        />
        <h2>Your Library</h2>
      </div>
      <div className="tabs">
        <button
          className={`btn-secondary ${activeTab === 'playing' ? 'active-tab' : ''}`}
          onClick={() => dispath(setActiveTab("playing"))}
          type="button"
        >
          Playing
        </button>
        <button
          className={`btn-secondary ${activeTab === 'browsing' ? 'active-tab' : ''}`}
          onClick={() => dispath(setActiveTab("browsing"))}
          type="button"
        >
          Browsing
        </button>
      </div>
    </>
  );
};

export default Home;
