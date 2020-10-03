import Link from 'next/link';
import React, { useContext } from 'react';
import { GlobalContext } from 'context';

export default function test() {
  const { globalState, dispatch, pageData } = useContext(GlobalContext);
  return (
    <div>
      <p> This is my test </p>
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: 'fuck you test ',
    },
  };
}
