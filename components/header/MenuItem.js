import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import BaseLI from '../shared/BaseLI';
import SubMenu from './SubMenu';
import ArrowSVG from './ArrowSVG';

export default function Menu({ data_name, data_sub_menu }) {
  return (
    <>
      <MenuItemLI>
        <NavItem>{data_name}</NavItem>
        <ArrowSVG />

        <SubMenu data_sub_menu={data_sub_menu} />
      </MenuItemLI>
    </>
  );
}

const MenuItemLI = styled(BaseLI)`
  margin: 0px 20px;
  padding-bottom: 10px;
  position: relative;
  display: flex;
  & > * {
    transition: ${(props) => props.theme.colorTransitionTime};
  }
  & > ul {
    opacity: 0;
    height: 0px;
    overflow: hidden;
    transition: opacity 0.3s;
  }
  &:hover {
    cursor: pointer;
    & > * {
      color: ${(props) => props.theme.colors.headerHover};
      fill: ${(props) => props.theme.colors.headerHover};
    }
    & > ul {
      height: unset;
      opacity: 1;
    }
    & > svg {
      transform: rotate(-180deg);
    }
  }
`;

const NavItem = styled.p`
  font-size: 1.2rem;
`;
