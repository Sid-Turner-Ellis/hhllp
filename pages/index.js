import fetch from 'node-fetch';
import { GlobalContext } from 'context';
import { useContext, useEffect, useState } from 'react';
import LandingPage from 'components/landing/LandingPage';
import fs from 'fs';
import Link from 'next/link';

export default function Home(props) {
  const { globalState, dispatch } = useContext(GlobalContext);

  return (
    <div>
      <LandingPage data={props.data} />
      <Link href="/test">
        <a>test</a>
      </Link>
    </div>
  );
}

export async function getStaticProps(ctx) {
  const hdata = await fetch(`${process.env.API_URL}/header`);
  const hres = await hdata.json();
  const ldata = await fetch(`${process.env.API_URL}/landing-page`);
  const lres = await ldata.json();

  // This will write the latest data to the json file
  const filePath = process.cwd() + '\\headerData.json';
  fs.writeFileSync(filePath, JSON.stringify(hres));

  return {
    props: {
      data: lres,
    },
  };
}
