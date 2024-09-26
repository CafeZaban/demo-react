import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Demo from "./Demo.jsx";
import Register from "./Register"
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "/Register",
    element: <Register />,
  }
]);

const theme = createTheme({});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
