import BaseButton from '../shared/BaseButton';
import React, {useState, useContext} from 'react';
import styled from 'styled-components';

export default function Burger() {
  const [modalVisible,setModalVisible] = useState(false)
  

  return (
    <Outer onClick={()=>{
      setModalVisible(prev => !prev)
    }}>
      <Top/>
      <Bottom />
    </Outer>
  )
}

const Outer = styled.div`
  position: relative;
  width: 50px;
  height:17px;
  top:5px;

  &:hover{
    cursor: pointer;

    & > * {
      background-color:  ${(props) => props.theme.colors.headerHover};
    }
  }


  & > * {
    background-color:  #3d3d3d;
    position: absolute;
    width:100%;
    height: 5px;
  }

  ${props=> props.theme.breakpoints.lg}{
    display:none;
  }
`;

const Top = styled.div`
  top: 0;
`;
const Bottom = styled.div`
	top: 12px;
	width: 75%;
  right: 0;

`;