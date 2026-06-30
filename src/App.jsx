import { useDispatch } from "react-redux";
import "./App.css";
import RightSide from "./components/RightSide";
import Sidebar from "./components/Sidebar";
import { useEffect } from "react";
import { setIsMobileView } from "./store/uiSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsMobileView(window.innerWidth < 1200));
    };

    window.addEventListener('resize' , handleResize);

    return() => window.removeEventListener('resize' , handleResize);
  } , [dispatch]);

  return (
    <>
      <div className="container flex bg-black">
        <Sidebar></Sidebar>
        <RightSide></RightSide>
      </div>
    </>
  );
}

export default App;
