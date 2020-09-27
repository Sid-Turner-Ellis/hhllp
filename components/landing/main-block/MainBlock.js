import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from 'context';

export default function MainBlock() {
  const { globalState, dispatch } = useContext(GlobalContext);
  const landingData = globalState.landing_page_main_block;
  return (
    <Wrapper data={globalState.landing}>
      <p>oi</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: ${'red'};
`;
