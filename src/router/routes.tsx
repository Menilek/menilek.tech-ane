import React from "react";
import type { PathRouteProps } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const CV = React.lazy(() => import("../pages/CV"));
const Blog = React.lazy(() => import("../pages/Blog"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Projects = React.lazy(() => import("../pages/Projects"));

export const routes: Array<PathRouteProps> = [
  {
    path: "/ane",
    title: 'Home',
    element: <Home />,
  },
  {
    path: "/ane/cv",
    title: 'CV',
    element: <CV />,
  },
  {
    path: "/ane/blog",
    title: 'Blog',
    element: <Blog />,
  },
  {
    path: "/ane/contact",
    title: 'Contact',
    element: <Contact />,
  },
  {
    path: "/ane/projects",
    title: 'Projects',
    element: <Projects />,
  },
];