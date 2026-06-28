import { useSelector } from "react-redux";

const Time = () => {

  const { currentTime , duration } = useSelector(state => state.player);

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };


  return <div className="songtime">{formatTime(currentTime)} / {formatTime(duration)}</div>;
};

export default Time;
