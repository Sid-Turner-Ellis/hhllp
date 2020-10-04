import React from 'react';
import Link from 'next/link';

export default function test() {
  return (
    <div>
      <p>test</p>
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  );
}
