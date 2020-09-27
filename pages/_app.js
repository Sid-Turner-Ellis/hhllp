import { GlobalContextWrapper } from 'context';
import Header from 'components/header/Header';
import App from 'next/app';
import fetch from 'node-fetch';

function MyApp({ Component, pageProps, appProps, headerData }) {
  console.log('pageprops in myapp', pageProps);
  return (
    <GlobalContextWrapper>
      <Header headerData={headerData} />
      <Component {...pageProps} />
    </GlobalContextWrapper>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const data = await fetch(`${process.env.API_URL}/header`);
  const headerData = await data.json();
  return { ...appProps, headerData };
};

export default MyApp;
