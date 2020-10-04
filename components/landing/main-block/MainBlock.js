import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from 'context';
import parseLanding from '../../functions/parsing/parseLanding';
import Link from 'next/link';

export default function MainBlock(props) {
  const { globalState, dispatch, pageData } = useContext(GlobalContext);

  const {
    data: {
      mainBlock: { h1, color, p, image },
    },
  } = pageData;

  return (
    <Wrapper
      // style={{ backgroundImage: 'url(land.jpg)' }}
      color={color}
      imageurl={process.env.API_URL + image[0].url}
    >
      <H1>{h1}</H1>
      <P>{p}</P>
      <Link href="/test">
        <a style={{ color: 'white' }}>Go to test</a>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: url(${(props) => props.imageurl});
  background-color: ${(props) => props.color};
`;

const H1 = styled.h1``;

const P = styled.p``;
