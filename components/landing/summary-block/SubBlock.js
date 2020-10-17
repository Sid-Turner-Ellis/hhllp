import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import PrimaryBtn from 'components/shared/PrimaryBtn.js';
import lottie from 'lottie-web'
import test from '../../../test.json'


export default function SubBlock({ sb }) {
  const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer:'svg',
      loop: true,
      autoplay: true,
      animationData: sb.lot
    })
    
  }, [])

  const { label, url, lot } = sb;
  return (
    <Wrapper>
      {/* <Img src={process.env.API_URL + url} /> */}
      <DIV ref={container}></DIV>
      <H3>{label}</H3>
      <PrimaryBtn>Read more</PrimaryBtn>

    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 10px;
  /* max-width: 15rem; */
  /* min-width: 250px; */
  user-select: none;
  padding: 3rem 0;

`;

const H3 = styled.h3`
  max-width: 90%;
  font-size: 1.5rem;
  margin: 20px auto ;
`;

const Img = styled.img`
  padding: 1rem;
  border-radius: 50%;
  background-color: lightgrey;
`;

const DIV = styled.div`
  max-width:200px;
  `;