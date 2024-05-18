import { createBrowserRouter } from "react-router-dom";
import * as Pages from "../pages";
import { ErrorBoundary, ProtectedRoute } from "../components";

export const BaseRouter = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute children={Pages.Home()} />, // Why do we need to call this?
    errorElement: <ErrorBoundary />,
  },
]);
