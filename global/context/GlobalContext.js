import { useReducer, useContext } from 'react';
import initialState from './intialState';
import reducer from './reducer';
import GlobalStyle from '../GlobalStyle';
import theme from '../theme';
import { ThemeProvider } from 'styled-components';

export const GlobalContext = React.createContext();

export function getContext() {
  return useContext(GlobalContext);
}

export function GlobalContextWrapper(props) {
  const [globalState, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ globalState, dispatch }}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </GlobalContext.Provider>
  );
}
