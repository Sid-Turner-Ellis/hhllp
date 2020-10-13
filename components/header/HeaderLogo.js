import styled from 'styled-components';

export default function HeaderLogo({ data }) {
  return <H1>{data}</H1>;
}

const H1 = styled.h1`
  font-weight: 600;
  font-size: calc(1rem + 1.6vw);

  ${props=> props.theme.breakpoints.lg}{
    font-size: 2.5rem;
  }
`;
