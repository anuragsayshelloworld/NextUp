import AddToDo from "../components/AddToDo";
import Logout from "../components/Logout";
import Menu from "../components/Menu";
import User from "../components/User";
import AuthContext from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";

function Layout({ children }) {
  const { user, setUser } = useContext(AuthContext);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = width < 700;

  return (
    <>
      {isMobile ? (
        <div className="flex justify-center items-center h-screen">
          <p className="text-lg font-bold">Mobile View Not Supported Yet</p>
        </div>
      ) : (
        <div className="flex w-screen h-screen">
          <div className="w-[280px] border flex flex-col">
            {/* Left Navbar */}
            <div className="flex h-24 border">
              <User />
            </div>
            <div className={`flex-1 ${!user ? 'pointer-events-none opacity-50' : ''}`}>
              <Menu />
            </div>
            <div className={`flex h-24 border ${!user ? 'pointer-events-none opacity-50' : ''}`}>
              <Logout setUser={setUser} />
            </div>
          </div>

          <div className={`flex-1 ${!user ? 'pointer-events-none opacity-50' : ''}`}>
            {/* Right side of the layout */}
            <div className="flex flex-col">
              <div className="flex h-24 justify-center items-center border gap-2">
                <AddToDo />
              </div>
              <div className="flex-1">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
