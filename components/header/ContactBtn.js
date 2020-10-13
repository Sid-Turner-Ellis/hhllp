import BaseButton from '../shared/BaseButton';
import React from 'react';
import styled from 'styled-components';

export default function ContactBtn({ data }) {
  return <ContactButton data={data}>{data.contact_us_text}</ContactButton>;
}

const ContactButton = styled(BaseButton)`
  display:none;

  border: ${({ data }) => (data.border ? '1px solid' : 'none')};
  border-color: ${(props) => props.data.border_color};
  font-size: 1.4em;
  font-weight: 700;
  /* FIX THE BOX SHADOWs */
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);

  &:hover {
    color: ${(props) => props.theme.colors.headerHover};
  }

  ${props=> props.theme.breakpoints.lg}{
    display:block;
  }
`;
