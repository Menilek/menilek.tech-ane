import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { routes } from "./routes";

const Routings = () => {
  return (
    <Suspense>
      <Routes>
        {routes.map((routeProps) => (
          <Route path={routeProps.path} element={routeProps.element} key={routeProps.path as string} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default Routings;