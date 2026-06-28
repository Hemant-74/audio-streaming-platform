import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="nav">
          <div className="hamburgerContainer">
            <RxHamburgerMenu className="hamburger" />
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
