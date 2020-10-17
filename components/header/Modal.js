import React, {useContext} from 'react'
import styled from 'styled-components'
import {GlobalContext} from 'context'

export default function Modal() {
  const {globalState, dispatch, pageData} = useContext(GlobalContext)
  return (
    <>
      <Outer modalVisible = {globalState.modalVisible}></Outer>
      <Wrapper modalVisible = {globalState.modalVisible}></Wrapper>
    </>

  )
}

const Outer = styled.div`
  top:0;
  left:0;
  width:100%;
  height:100%;
  position: fixed;
  background-color:rgba(0, 0, 0, 0.48);

  z-index: ${({modalVisible})=> modalVisible? 2 :-2};
  opacity: ${({modalVisible})=> modalVisible? 1 : -1};
`;

const Wrapper = styled.div`
  position:fixed;
  top: 0;
  width: 70%;
  height: 100%;
  background-color: white;
  z-index:3;
  right: ${props => props.modalVisible ? 0 : '-100%' };
  transition: right .2s linear;
`;

