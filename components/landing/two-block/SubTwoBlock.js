import React, {useContext} from 'react'
import styled from 'styled-components'




export default function SubTwoBlock({h2,color,text}) {
  console.log('hello?');
  return (
    <Wrapper color={color}>
      <H3>{h2}</H3>
      <P>{text}</P>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${props => props.color};
  padding:3.5rem;
  text-align:center;
  ${props=>props.theme.breakpoints.sm}{
    padding: 8rem;

  }
  ${props=>props.theme.breakpoints.md}{
    padding: 9rem 10rem;
    
  }
  ${props=>props.theme.breakpoints.lg}{
    
  }
`;

const H3 = styled.h3`
  margin-bottom:12px;
  font-size:2rem;

  ${props=>props.theme.breakpoints.sm}{
    font-size: 2.5rem;
  }
  ${props=>props.theme.breakpoints.md}{
    
  }
  ${props=>props.theme.breakpoints.lg}{
    
  }

`;

const P = styled.p`
  font-size:1.25rem;
  ${props=>props.theme.breakpoints.sm}{
    font-size:1.6rem;
  }
  ${props=>props.theme.breakpoints.md}{
    
  }
  ${props=>props.theme.breakpoints.lg}{
    
  }

`;