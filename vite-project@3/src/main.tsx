import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// 导入路由模块
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import { routerList } from "./router";
const router = createBrowserRouter(routerList);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router}></RouterProvider>
  // <React.StrictMode>
  //   {/* <App /> */}
  // </React.StrictMode>
);
