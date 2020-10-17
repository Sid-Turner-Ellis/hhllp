import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { GlobalContext } from 'context';
import parseLanding from '../../functions/parsing/parseLanding';
import parseURL from '../../functions/parsing/parseURL';

import Link from 'next/link';
import PrimaryBtn from 'components/shared/PrimaryBtn.js';


export default function MainBlock(props) {
  const { globalState, dispatch, pageData } = useContext(GlobalContext);

  const {
    data: {
      mainBlock: { h1, color, p, image },
    },
  } = pageData;


  return (
    <Wrapper color={color} image={parseURL(image[0].url)} style={{backgroundImage:`url(/${parseURL(image[0].url)})`}}>
      <H1>{h1}</H1>
      <P>{p}</P>
      <CTA>
        <Link href="/test">
          <a>Go to test</a>
        </Link>
      </CTA>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* background-image: url(/${(props) => props.image}); */
  background-color: ${(props) => props.color};
  background-position:center;
  background-size:cover;
  position:relative;
  /* z-index:1; */
  padding: 30px 20px;
  text-align:center;

  & > * {
    margin: 20px 0px;
  }




  ${props=> props.theme.breakpoints.sm}{
    padding:80px 50px;
    /* text-align:center; */

  }

  ${props=> props.theme.breakpoints.lg}{
    padding:130px 0px;

  }
`;

const H1 = styled.h1`
  font-weight: 8000;
  font-size: 2.6rem;
  /* padding: 0 2rem; */

  ${props=> props.theme.breakpoints.md}{
    font-size: 3rem;
  }

  ${props=> props.theme.breakpoints.lg}{
    font-size: 3.5rem;
  }

  
`;

const P = styled.p`
  font-size: 1.2rem;

  ${props=> props.theme.breakpoints.sm}{
    font-size: 1.3rem;
    max-width: 80%;
    margin: auto;
  }

  ${props=> props.theme.breakpoints.lg}{
    font-size: 1.7rem;
    max-width: 70%;

  }
`;

const CTA = styled(PrimaryBtn)`
  ${props=> props.theme.breakpoints.sm}{
    font-size: 1.3rem;
  }
`;