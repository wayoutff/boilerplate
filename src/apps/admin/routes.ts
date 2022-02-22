import React from "react";

import { Home, Panel } from "./pages";

export default [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/panel",
    exact: true,
    component: Panel,
  },
];
