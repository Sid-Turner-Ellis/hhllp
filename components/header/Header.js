import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from 'context';
import ContactBtn from './ContactBtn';
import HeaderLogo from './HeaderLogo';
import Menu from './Menu';
import Burger from './Burger';
import Modal from './Modal'

import headerData from '../../headerData.json';

export default function Header() {
  const { globalState, dispatch } = useContext(GlobalContext);
  return (
    <Wrapper>
      <Modal/>
      <InnerWrap>
        <HeaderLogo data={headerData.Logo} />
        <Menu data={headerData.nav_item} />
      </InnerWrap>
      <Burger/>
      <ContactBtn data={headerData.contact_btn} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  /* max-width: 90%; */
  justify-content: space-between;
  margin: auto;
  padding: 20px 10px;
  /* position: relative; */
  z-index: 4;
  align-items: flex-start;

  ${props=> props.theme.breakpoints.sm}{
    padding: 20px 30px;
  }

  ${props=> props.theme.breakpoints.lg}{
    align-items: baseline;
    padding: 20px 50px;
  }
`;

const InnerWrap = styled.div`
  display: flex;
  align-items: baseline;
`;
