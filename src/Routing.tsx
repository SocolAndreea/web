import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";

interface PrivateElementProps {
  element: React.ComponentType;
}

// function PrivateElement({ element: Element }: PrivateElementProps) {
//   return localStorage.getItem("authToken") ? <Element /> : <Home />;
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  // {
  //     path: '/dashboard',
  //     element: <PrivateElement element={Dashboard} />,
  // },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
