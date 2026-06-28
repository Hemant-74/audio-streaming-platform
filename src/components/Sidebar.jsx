import Library from "./Library";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <>
      <div className="left">
        <Navigation></Navigation>
        <Library></Library>
      </div>
    </>
  );
};

export default Sidebar;
