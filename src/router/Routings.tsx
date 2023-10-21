import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { routes } from "./routes";

const Routings = () => {
  return (
    <Suspense>
      <Routes>
        {routes.map((routeProps) => (
          <Route {...routeProps} key={routeProps.path as string} />
        ))}
        <Route path="*" element={ <Navigate to="/ane" /> } />
      </Routes>
    </Suspense>
  );
};

export default Routings;