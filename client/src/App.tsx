import React, { StrictMode, Suspense, useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './themes';
import { GlobalStyle } from './components/globalStyles';
import { AuthProvider } from './context/AuthContext';
import './assets/styles/style.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { getFromStorage } from './services/local-session-storage/service-localStorage';
import { STORAGE_NAME, STORAGE_THEME } from './CONST/key-localStorage';
import { authAsyncActions } from './redux-slices/auth-slice';
import { RouterLayout } from './components/routes/RouterLayout';
import { getThemeSelector } from './selectors/selectors';
import { setTheme } from './redux-slices/manager-ui-slice';

function App() {
  const dispatch = useAppDispatch();
  const storageTheme = useAppSelector(getThemeSelector);
  const theme = storageTheme ? light : dark;
  useEffect(() => {
    console.log('IM INSIDE APP USEEFF');

    dispatch(setTheme(JSON.parse(localStorage.getItem(STORAGE_THEME)!)));

    const getInitinalDataAndProfileUser = async () => {
      const { token, userId } = getFromStorage(STORAGE_NAME);

      if (token) {
        await dispatch(authAsyncActions.getMyProfileAction(userId));
      }
    };
    getInitinalDataAndProfileUser();
  }, [dispatch]);

  return (
    <StrictMode>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AuthProvider>
            <Suspense fallback={<span>loading...</span>}>
              <RouterLayout />
            </Suspense>
          </AuthProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </StrictMode>
  );
}

export default App;
