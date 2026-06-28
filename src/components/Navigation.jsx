import { RiHome5Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const Navigation = () => {
  return (
    <>
      <div className="close">
        <IoCloseOutline />
      </div>
      <div className="home bg-grey rounded m-1 p-1">
        <div className="logo">
          <img width="80" className="invert" src="img/logo.png" alt="" />
        </div>
        <ul>
          <li>
            <RiHome5Line
              className="text-white flex-shrink-0"
              size={24}
              style={{ minWidth: "24px" }}
            />
            Home
          </li>
          <li>
            <IoIosSearch
              className="text-white flex-shrink-0"
              size={24}
              style={{ minWidth: "24px" }}
            />
            Search
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
