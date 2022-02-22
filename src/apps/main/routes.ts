import React from "react";

import { NewPage } from "./pages";

import { Home } from "./pages/index.lazy";

export default [
  {
    path: "/",
    exact: true,
    lazy: true, // boolean, or component
    component: Home,
  },
  {
    path: "/new",
    exact: true,
    component: NewPage,
  },
];
