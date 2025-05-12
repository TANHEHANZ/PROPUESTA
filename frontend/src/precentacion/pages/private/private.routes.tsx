import { Route, Routes } from "react-router-dom";
import { privateRouter } from "../../../aplicacion/core/constants/routes";
import PrivateLayout from "./layout";

export const RouterPrivate = () => {
  return (
    <Routes>
      <Route path="/admin" element={<PrivateLayout />}>
        {privateRouter.map((route) => (
          <Route
            key={route.path}
            path={`${route.path}`}
            element={<route.component />}
          />
        ))}
      </Route>
    </Routes>
  );
};
