import Footer from "./Footer";
import SongList from "./SongList";
import Home from "./Home";

const Library = () => {
  return (
    <div className="library bg-grey rounded m-1 p-1">
      <Home></Home>
      <SongList></SongList>
      <Footer></Footer>
    </div>
  );
};

export default Library;
