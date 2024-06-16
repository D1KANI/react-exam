import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Routes } from "@/types/router";

interface Props {
  children: React.ReactNode;
}

export const PrivateRoute = (props: Props) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth?.user) {
    return (
      <Navigate
        to={Routes.LOGIN}
        state={{ from: location.pathname }}
        replace
      ></Navigate>
    );
  }

  return <>{props.children}</>;
};
