import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import BaseLI from '../shared/BaseLI';
import SubMenu from './SubMenu';

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
  }
  &:hover {
    cursor: pointer;
    & > * {
      color: ${(props) => props.theme.colors.headerHover};
      fill: ${(props) => props.theme.colors.headerHover};
    }
    & > ul {
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

function ArrowSVG() {
  return (
    <svg
      style={{ width: 12, marginLeft: 10 }}
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 512.011 512.011"
    >
      <g>
        <g>
          <path
            d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0
			s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667
			C514.096,145.416,514.096,131.933,505.755,123.592z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
}
