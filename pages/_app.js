import { GlobalContextWrapper } from 'context';
import Header from 'components/header/Header';
import App from 'next/app';
import fetch from 'node-fetch';

function MyApp({ Component, pageProps, appProps }) {
  console.log('pageprops in myapp', pageProps);
  return (
    <GlobalContextWrapper>
      <Header />
      <Component {...pageProps} />
    </GlobalContextWrapper>
  );
}

export default MyApp;
