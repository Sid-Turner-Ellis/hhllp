import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from 'context';
import ContactBtn from './ContactBtn';
import HeaderLogo from './HeaderLogo';
import Menu from './Menu';
import headerData from '../../headerData.json';

export default function Header() {
  const { globalState, dispatch } = useContext(GlobalContext);
  return (
    <Wrapper>
      <InnerWrap>
        <HeaderLogo data={headerData.Logo} />
        <Menu data={headerData.nav_item} />
      </InnerWrap>
      <ContactBtn data={headerData.contact_btn} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  /* max-width: 90%; */
  justify-content: space-between;
  margin: auto;
  padding: 20px 50px;
`;

const InnerWrap = styled.div`
  display: flex;
  align-items: baseline;
`;
