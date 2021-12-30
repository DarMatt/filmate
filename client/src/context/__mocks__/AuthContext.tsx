// import React, {useContext} from 'react';
// import {IAuthContext} from '../AuthContext';

// const value = {
//   token: 'testToken',
//   userId: 'testID',
//   login: jest.fn(),
//   logout: jest.fn(),
// };

// export const AuthProvider: React.FC = ({children}) => {
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// const AuthContext = React.createContext<IAuthContext>(value);

// export const useAuth = jest.fn(() => {
//   const context = useContext(AuthContext);
//   return {
//     ...context,
//     isAuthenticated: true,
//   };
// });
