export type IPrivateRoute = {
  path: string;
  children: React.ReactNode;
  redirectTo: string;
  isAuth: boolean;
};
