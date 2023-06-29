import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/ui/Header";
import Body from "./components/ui/Body";
import Footer from "./components/ui/Footer";
import Error from "./components/Error";
import RestaurantMenu from "./components/ui/RestaurantMenu";
import Login from "./components/ui/Login";
import About from "./components/ui/About";
import Order from "./components/ui/Order";
import store from "./utils/store";
import { Provider } from "react-redux";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/user/order",
        element: <Order />,
      },
    ],
  },
  {
    path: "/user/signin",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
