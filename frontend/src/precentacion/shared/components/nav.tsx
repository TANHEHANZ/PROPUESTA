import { Link, useLocation } from "react-router-dom";
import { privateRouter } from "../../../aplicacion/core/constants/routes";
import { useDrawer } from "../../../aplicacion/core/hoocks/useDrawer";

const Nav = () => {
  const location = useLocation();
  const { toggle, setContent, setTitle } = useDrawer();
  const handleOpenDrawer = () => {
    setTitle("My Drawer Title");
    setContent(<div>This is my drawer content</div>);
    toggle();
  };

  return (
    <div className="flex flex-col p-4 bg-white gap-2 border-r border-gray-200 ">
      <h1> LOGO</h1>
      {privateRouter.map((route) => (
        <Link
          key={route.path}
          to={route.path}
          className={`flex gap-2 items-center p-2 rounded-md text-gray-600 
    ${
      location.pathname.includes(route.path)
        ? "bg-violet-300/10 backdrop-blur-xl border border-violet-700/20 text-violet-900"
        : "hover:bg-munayki-primary/10"
    }`}
        >
          {route.icon}
          {route.name}
        </Link>
      ))}
      <button onClick={handleOpenDrawer}>openDrawer</button>
    </div>
  );
};

export default Nav;
