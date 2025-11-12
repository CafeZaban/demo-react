import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Demo from "./Demo.jsx";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Landing from "./pages/Landing.jsx";
import About from "./pages/About.jsx";
import Pricing from "./pages/Pricing.jsx";
import TeachersPage from "./pages/TeachersPage.jsx";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/teachers",
    element: <TeachersPage />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
]);

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Vazirmatn, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>
);
