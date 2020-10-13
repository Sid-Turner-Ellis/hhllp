import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export default function test() {
  return (
    <div>
      <P>test</P>
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  );
}

const P = styled.p`
  background-image: url('http://localhost:1337/uploads/landing_2_d11c8774d7.jpg');
`;
