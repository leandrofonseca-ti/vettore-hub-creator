import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import "./styles.css";
import { Index } from "./routes/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);

const root = document.getElementById("root")!;

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
