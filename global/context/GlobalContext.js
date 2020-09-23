import { useReducer } from 'react';
import initialState from './intialState';
import reducer from './reducer';
import GlobalStyle from '../GlobalStyle';
import theme from '../theme';
import { ThemeProvider } from 'styled-components';

export const GlobalContext = React.createContext();

export function GlobalContextWrapper({ children }) {
  const [globalState, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ globalState, dispatch }}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GlobalContext.Provider>
  );
}
