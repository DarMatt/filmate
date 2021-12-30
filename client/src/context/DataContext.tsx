import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ISignUp } from '../interfaces/signUp';

interface IDataContext {
  data: ISignUp;
  // eslint-disable-next-line no-unused-vars
  setValues: (values: Partial<ISignUp>) => void;
}

const DataContext = createContext<IDataContext | undefined>(undefined);

export const DataProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({});

  const setValues = useCallback((values) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  }, []);

  const context = useMemo(() => ({ data, setValues }), [data, setValues]);

  return <DataContext.Provider value={context}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
};
