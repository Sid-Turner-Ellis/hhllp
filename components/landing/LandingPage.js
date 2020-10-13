import React from 'react';
import styled from 'styled-components';
import MainBlock from './main-block/MainBlock';
import Summary from './summary-block/Summary';
import TwoBlock from './two-block/TwoBlock'

export default function LandingPage() {
  return (
    <div>
      <MainBlock />
      <Summary />
      <TwoBlock />
    </div>
  );
}
