export interface IAuth {
  token: string;
  // eslint-disable-next-line no-unused-vars
  login: (jwtToken: string, id: string) => void;
  logout: () => void;
  userId: string;
}
