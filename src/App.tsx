import React from "react";
import { RouterProvider } from "react-router-dom";

import AppImage from "./assets/AppImage";
import router from "./Routing";
import "./App.css";

function App() {
  return (
    <AppImage>
      <RouterProvider router={router}></RouterProvider>
    </AppImage>
  );
}

export default App;
