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
  background-color: rgba(186, 186, 186, 0.32);
  min-width: 100%;
  top: 100%;
  border-radius: ${(props) => props.theme.borderRadius};
`;

const SubMenuLI = styled(BaseLI)`
  min-width: 100%;
  padding: 10px;
  padding-right: 50px;
  border-radius: ${(props) => props.theme.borderRadius};

  &:hover {
    background-color: #bababa;
  }
`;
