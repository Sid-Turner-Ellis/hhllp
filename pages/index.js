import fetch from 'node-fetch';
import { GlobalContext } from 'context';
import { useContext, useEffect, useState } from 'react';
import LandingPage from 'components/landing/LandingPage';

export default function Home(props) {
  const { globalState, dispatch } = useContext(GlobalContext);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    dispatch({ type: 'header', data: props.res });
    dispatch({ type: 'landing', data: props.res });
  }, [dataLoaded]);
  return (
    <div>
      <LandingPage data={props.data} />
    </div>
  );
}

export async function getStaticProps(ctx) {
  const data = await fetch(`${process.env.API_URL}/landing-page`);
  const res = await data.json();

  return {
    props: {
      data: res,
    },
  };
}

// export async function getStaticProps(context) {
//   const data = await fetch(`${process.env.API_URL}/header`);
//   const res = await data.json();
//   console.log(context);
//   return {
//     props: {
//       res,
//     },
//   };
// }
