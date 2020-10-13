import fetch from 'node-fetch';
import { GlobalContext } from 'context';
import { useContext, useEffect, useState } from 'react';
import LandingPage from 'components/landing/LandingPage';
import parseLanding from '../components/functions/parsing/parseLanding';
import fs from 'fs';

export default function Home(props) {
  const { globalState, dispatch } = useContext(GlobalContext);

  return (
    <div>
      <LandingPage />
    </div>
  );
}

export async function getStaticProps(ctx) {
  const hdata = await fetch(`${process.env.API_URL}/header`);
  const hres = await hdata.json();
  const ldata = await fetch(`${process.env.API_URL}/landing-page`);
  let lres = await ldata.json();

  // This will write the latest data to the json file
  const filePath = process.cwd() + '\\headerData.json';
  fs.writeFileSync(filePath, JSON.stringify(hres));
  console.log('heyboi',lres);

  lres = parseLanding(lres);
  return {
    props: {
      data: lres,
    },
  };
}
