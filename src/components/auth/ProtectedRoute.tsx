import { ReactNode, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../loader";
import { ErrorBoundary } from "../error";
import { ProtectedRouteProps } from "./types";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth";

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading, error, loginWithRedirect, user } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated && !isLoading && !error && !user) {
      loginWithRedirect();
    }
    if (isAuthenticated) {
      dispatch(login(user));
    }
  }, [isAuthenticated, isLoading, loginWithRedirect, navigate]);

  if (isLoading) return <Loader />;

  if (error) return <ErrorBoundary errorMessage={error.message} />;

  if (isAuthenticated) return children as ReactNode;

  return <Loader />;
};
