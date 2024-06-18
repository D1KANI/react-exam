import { Routes } from "@/types/router";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const useLogout = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (auth?.user) {
      auth.signOut(() => {
        navigate(Routes.LOGIN);
      });
    }
  };

  return { handleLogout };
};
