import styled from 'styled-components';
import Link from 'next/link';
import BaseLI from '../shared/BaseLI';

const SubMenu = ({ data_sub_menu }) => {
  return (
    <SubMenuUL>
      {data_sub_menu.map((v, i) => (
        <SubMenuLI key={i}>
          <Link href="/">
            <A>{v.label}</A>
          </Link>
        </SubMenuLI>
      ))}
    </SubMenuUL>
  );
};

export default SubMenu;

const A = styled.a`
  color: black;
`;

const SubMenuUL = styled.ul`
  position: absolute;
  background-color: #f2f2f2;
  min-width: 100%;
  top: 100%;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.75);
`;

const SubMenuLI = styled(BaseLI)`
  min-width: 100%;
  padding: 10px;
  padding-right: 50px;
  border-radius: ${(props) => props.theme.borderRadius};
  transition: background-color 0.15s;

  &:hover {
    background-color: rgba(36, 36, 36, 0.3);
  }
`;
