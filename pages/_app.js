import { GlobalContextWrapper } from 'context';
import Header from 'components/header/Header';

function MyApp({ Component, pageProps, appProps }) {
  return (
    <GlobalContextWrapper pageData={pageProps}>
      <Header />
      <Component {...pageProps} />
    </GlobalContextWrapper>
  );
}

export default MyApp;
