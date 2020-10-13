import React from 'react';
import styled from 'styled-components';

const BaseButton = styled.div`
  display: inline-block;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 7px 20px;
  font-size: 1rem;
  font-weight: 400;
  font-weight: 700;

  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;

export default BaseButton;
