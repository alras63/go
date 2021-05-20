


import React from "react";
import styled from "styled-components";
import { laguageVariation } from "../../../../language";

const Wrapper = styled.div`
width: 100%;
margin-top: 30px;
background-color: #EBEBEB;
`;


const ButtonTabs = styled.span`
    padding: 10px 20px;
    font-size: 24px;
    display: inline-block;
`;

const TabsHelp = ({ hint,stepColor, enemyPass, yourColor, you, opponent, turns, stepMain, stepTwo, times,
    setHint,
    setResign }) => {
  return (
    <Wrapper>
          <ButtonTabs onClick={() => setHint('hint')}>{laguageVariation['Hints']}</ButtonTabs>
          <ButtonTabs onClick={() => setHint('123')}>{laguageVariation['Scenarios']}</ButtonTabs>
          <ButtonTabs onClick={() => setHint('')}>{laguageVariation['GameProgress']}</ButtonTabs>
    </Wrapper>
  );
};

export default TabsHelp;
