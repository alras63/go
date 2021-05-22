import React from "react";
import styled from "styled-components";
import Players from "./components/Players/Players";
import Info from "./components/Info/Info";
import TabsHelp from "../ButtonsBoard/ButtonsBoard";
import { isMobile } from "react-device-detect";

const Wrapper = styled.div`
  margin-left: ${(props) => (!isMobile ? "25px" : "0")};

  display: flex;
  flex-direction: column;
`;

const GameInfo = ({
  stepColor,
  enemyPass,
  yourColor,
  you,
  opponent,
  turns,
  stepMain,
  stepTwo,
  times,
  hint,
  setHint,
  setResign,
}) => {
  return (
    <Wrapper>
      <Players
        enemyPass={enemyPass}
        opponent={opponent}
        you={you}
        stepColor={stepColor}
        yourColor={yourColor}
        stepMain={stepMain}
        stepTwo={stepTwo}
        times={times}
      />
      <TabsHelp hint={hint} setHint={setHint} setResign={setResign} />
      <Info turns={turns} />
    </Wrapper>
  );
};

export default GameInfo;
