import BaseButton from '../shared/BaseButton';
import React from 'react';
import styled from 'styled-components';

export default function ContactBtn({ data }) {
  return <ContactButton data={data}>{data.contact_us_text}</ContactButton>;
}

const ContactButton = styled(BaseButton)`
  border: ${({ data }) => (data.border ? '1px solid' : 'none')};
  border-color: ${(props) => props.data.border_color};
  font-size: 1.4em;
  font-weight: 600;
`;
