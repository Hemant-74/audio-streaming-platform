import { useDispatch, useSelector } from "react-redux";
import { setAllAlbums } from "../store/albumSlice";
import { albumData } from "../data/album";
import { useEffect } from "react";
import Card from "./Card";

const CardContainer = () => {
  const dispatch = useDispatch();

  const albums = useSelector((state) => state.album.allAlbums);

  useEffect(() => {
    dispatch(setAllAlbums(albumData));
  } , [dispatch]);

  return (
    <div className="cardContainer">
      {albums.map((album) => (
        <Card key = {album.folderName} album={album}></Card>
      ))}
    </div>
  );
};

export default CardContainer;
