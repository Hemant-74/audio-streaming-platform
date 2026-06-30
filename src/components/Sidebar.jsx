import { useDispatch, useSelector } from "react-redux";
import Library from "./Library";
import Navigation from "./Navigation";
import { closeLibrary } from "../store/uiSlice";
import { useEffect, useRef } from "react";

const Sidebar = () => {
  const dispatch = useDispatch();
  const libraryRef = useRef(null);
  
  const {isLibraryOpen , isMobileView} = useSelector(state => state.ui);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(isMobileView && isLibraryOpen && libraryRef.current && !libraryRef.current.contains(event.target)) {
        dispatch(closeLibrary());
      }
    }

    document.addEventListener('click' , handleClickOutside);

    return () => document.removeEventListener('click' , handleClickOutside);
  } , [isLibraryOpen , isMobileView , dispatch]);
  
  return (
    <>
      <div ref={libraryRef} className={`left ${isMobileView ? (isLibraryOpen ? 'active' : '') : ''}`}>
        <Navigation></Navigation>
        <Library></Library>
      </div>
    </>
  );
};

export default Sidebar;
