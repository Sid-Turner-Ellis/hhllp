import fetch from 'node-fetch';
import { GlobalContext } from 'context';
import { useContext, useEffect } from 'react';

export default function Home(props) {
  const { globalState, dispatch } = useContext(GlobalContext);
  useEffect(() => {
    dispatch({ type: 'header', data: props.res });
  }, []);
  return (
    <div>
      <p> </p>
    </div>
  );
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
