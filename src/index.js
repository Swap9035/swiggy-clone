// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Help from "./Pages/Help";
import Search from "./Pages/Search";
import Restaurant from "./Pages/Restaurant";
import Cart from "./Pages/Cart";
import PageNotFound from "./Pages/PageNotFound";
import PayPalWrapper from "./PayPalWrapper";

const urls = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:resId",
        element: <Restaurant />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PayPalWrapper>
    <RouterProvider router={urls} />
    </PayPalWrapper>
  </React.StrictMode>

);
                                                                                  
reportWebVitals();
