import { useState, useCallback } from 'react';

interface IHttp {
  IsLoading: boolean;
  request: (func?: any, params?: any) => Promise<any>;
  error: string | null;
  clearError: () => void;
}

export const useHttp = (func: any, params?: any): IHttp => {
  const [IsLoading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const request = () => {
    setLoading(true);

    return func(params)
      .then((response: any) => {
        setLoading(false);
        setError(null);
        return response;
      })
      .catch((error: Error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  const clearError = useCallback(() => setError(null), []);

  return { IsLoading, request, error, clearError };
};
