import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from 'context';

export default function MainBlock(props) {
  const { globalState, dispatch } = useContext(GlobalContext);
  console.log('mainblock', props);
  return (
    <Wrapper data={globalState.landing}>
      <p>oi</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: ${'red'};
`;
