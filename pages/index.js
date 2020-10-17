import fetch from 'node-fetch';
import { GlobalContext } from 'context';
import { useContext, useEffect, useState } from 'react';
import LandingPage from 'components/landing/LandingPage';
import parseLanding from '../components/functions/parsing/parseLanding';
import fs from 'fs';
import {getStrapiURLs,deleteFile,saveFile} from '../components/functions/services/nodeServices'
import { dirname } from 'path';

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

  // function deleting and saving images
  const strapiIDs = await getStrapiURLs()
  const fileIDs = fs.readdirSync(`${process.cwd()}/public`)

  const commands = {
    save: strapiIDs.filter(v => !fileIDs.includes(v)),
    del: fileIDs.filter(v => !strapiIDs.includes(v)),
  }

  // delete all in the directory 
  commands.del.forEach(i => deleteFile(i))
  
  // save all images
  commands.save.forEach(i => saveFile(i))


  lres = parseLanding(lres);
  return {
    props: {
      data: lres,
    },
  };
}
