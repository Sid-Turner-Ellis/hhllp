import styled from 'styled-components';

export default function HeaderLogo({ data }) {
  return <H1>{data}</H1>;
}

const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
`;
