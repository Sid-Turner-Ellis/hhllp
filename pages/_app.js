import { GlobalContextWrapper } from 'context';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextWrapper>
      <p>header</p>
      <Component {...pageProps} />
      <p>footer</p>
    </GlobalContextWrapper>
  );
}
export default MyApp;
