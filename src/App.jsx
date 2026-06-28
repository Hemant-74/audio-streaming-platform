import "./App.css";

import Header from "./components/Header";
import RightSide from "./components/RightSide";
import Sidebar from "./components/Sidebar";

function App() {
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
