import React, { useCallback, useContext, useEffect, useState } from 'react';

export interface IAuthContext {
  token: string;
  // eslint-disable-next-line no-unused-vars
  login: (jwtToken: string, id: string) => void;
  logout: () => void;
  userId: string;
}
const storageName = 'userData';

export const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  const login = useCallback((jwtToken: string, id: string) => {
    setToken(jwtToken);
    setUserId(id);

    localStorage.setItem(
      storageName,
      JSON.stringify({
        userId: id,
        token: jwtToken,
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken('');
    setUserId('');
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem(storageName);
    const data = userData && JSON.parse(userData);

    if (data && data.token) {
      login(data.token, data.userId);
    }
  }, [login]);

  const authState = React.useMemo(
    () => ({ token, userId, login, logout }),
    [token, userId, login, logout]
  );

  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>;
};

const AuthContext = React.createContext<IAuthContext | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return { ...context, isAuthenticated: !!context.token };
};
