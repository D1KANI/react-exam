export interface AuthContext {
  user: string | null;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  signIn: (newUser: string, callback?: (...args: any[]) => any) => void;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  signOut: (callback?: (...args: any[]) => any) => void;
}
