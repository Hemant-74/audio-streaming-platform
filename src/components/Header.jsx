import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toggleLibrary } from "../store/uiSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { isMobileView } = useSelector((state) => state.ui);

  return (
    <>
      <div className="header">
        <div className="nav">
          <div className="hamburgerContainer">
            {isMobileView && (
              <RxHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(toggleLibrary());
                }}
                className="hamburger"
                size={24}
              />
            )}
            <IoIosArrowForward size={24} />
            <IoIosArrowBack size={24} />
          </div>
        </div>
        <div className="buttons">
          <button className="signupbtn">Sign up</button>
          <button className="loginbtn">Log in</button>
        </div>
      </div>
    </>
  );
};

export default Header;
