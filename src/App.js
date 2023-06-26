import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

/**
 * - Header
 *    - LogoText
 *    - Help
 *    - Cart
 *    - Sign In
 */
import Header from "./components/ui/Header";
import Body from "./components/ui/Body";
import Footer from "./components/ui/Footer";
import Error from "./components/Error";
import RestaurantMenu from "./components/ui/RestaurantMenu";
import Login from "./components/ui/Login";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
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
        path: "/help",
        element: <h1>Help section</h1>,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
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
