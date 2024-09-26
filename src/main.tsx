import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Demo from "./Demo.jsx";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Login from "./Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const theme = createTheme({});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
