import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

export default function Menu({ data }) {
  return (
    <MenuItemUL>
      {data.map((v) => (
        <MenuItem
          key={v.id}
          data_name={v.nav_item}
          data_sub_menu={v.nav_dropdown}
        />
      ))}
    </MenuItemUL>
  );
}

const MenuItemUL = styled.div`
  padding: 0px 10px;
  display: flex;
`;
