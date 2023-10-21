import React from "react";
import type { PathRouteProps } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));

export const routes: Array<PathRouteProps> = [
  {
    path: "/ane",
    element: <Home />,
  },
];