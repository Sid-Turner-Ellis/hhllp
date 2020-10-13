import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from 'context';
import SubBlock from './SubBlock';

export default function Summary_head() {
  const { globalState, dispatch, pageData } = useContext(GlobalContext);
  const {
    data: {
      sumBlock: { h2, desc, subBlock },
    },
  } = pageData;
  return (
    <Wrapper>
      <H2>{h2}</H2>
      <P>{desc}</P>
      <SubWrapper>
        {subBlock.map((sb) => (
          <SubBlock sb={sb} />
        ))}
      </SubWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: ${(props) => props.theme.paddings.default};
  text-align: center;
`;

const SubWrapper = styled.div`
  /* padding: 3rem 0; */
  /* width: 75%;
  margin: auto; */
  
  ${(props) => props.theme.breakpoints.lg} {
    display: flex;
    justify-content: center;

  }
`;

const H2 = styled.h2`
  font-size: 2.5rem;
`;

const P = styled.p`
  font-size: 1.5rem;
  margin: 8px auto;

  ${({theme}) => theme.breakpoints.sm}{
    max-width: 75%;
  }
`;
