import React,{useContext} from 'react'
import styled from 'styled-components'
import SubTwoBlock from './SubTwoBlock'
import { GlobalContext } from 'context';



export default function TwoBlock() {
  const { globalState, dispatch, pageData } = useContext(GlobalContext);
  const { subBlocks } = pageData['data']['twoBlock']


  return (
    <Wrapper>
      {
        subBlocks.map(block=>{
          return <SubTwoBlock h2={block.h2} text={block.text} color={block.color} />
        })
      }
    </Wrapper>
  )
}


const Wrapper = styled.div`
  ${props=>props.theme.breakpoints.lg}{
    display: flex;
    & > * {
      width:50%;
    }
  }
`;