import { Outlet } from "react-router-dom";
import Nav from "../../shared/components/nav";
import Header from "../../shared/components/header";
import { DrawerProvider } from "../../../aplicacion/core/context/dawer.context";
import { Drawer } from "../../shared/components/drawer";

const PrivateLayout = () => {
  return (
    <div className="grid grid-cols-[300px_1fr]  min-h-screen">
      <DrawerProvider>
        <Drawer />
        <Nav />
        <main>
          <Header />
          <Outlet />
        </main>
      </DrawerProvider>
    </div>
  );
};

export default PrivateLayout;
