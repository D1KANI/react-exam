import { createContext, useState } from "react";
import { AuthContext as IAuthContext } from "@/types/context";

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = (props: Props) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem("user"));

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const signIn = (newUser: string, callback?: (...args: any[]) => any) => {
    setUser(newUser);
    localStorage.setItem("user", newUser);

    if (callback) {
      callback();
    }
  };

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const signOut = (callback?: (...args: any[]) => any) => {
    setUser(null);
    localStorage.removeItem("user");

    if (callback) {
      callback();
    }
  };

  const value: IAuthContext = {
    user,
    signIn,
    signOut,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
