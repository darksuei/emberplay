import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { ErrorBoundary } from "../components";

export const BaseRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
]);
