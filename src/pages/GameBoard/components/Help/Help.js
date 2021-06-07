import React from "react";
import styled from "styled-components";
import Players from "../GameInfo/components/Players/Players";
import TabsHelp from "../ButtonsBoard/ButtonsBoard";
import {
  HEATMAP_FULL,
  HEATMAP_ZONE_QUARTER,
  HEATMAP_ZONE_QUARTER_ONE,
} from "./types";
import { laguageVariation } from "../../../../language";
import { isMobile } from "react-device-detect";
/*Отвечает за тултипы */
import ReactTooltip from "react-tooltip";

const Wrapper = styled.div`
  width: 90%;
  margin-left: ${(props) => (!isMobile ? "25px" : "0")};
`;

const HelpWrapper = styled.div`
  margin-top: 23px;
  max-height: 508px;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const HelpItem = styled.div`
  width: 48%;
  margin-bottom: 10px;
  background: ${(props) => (props.active ? "#D8AD63" : "#f6f6f6")};
  padding: 10px;
  cursor: pointer;
`;

const Help = ({
  enemyPass,
  stepColor,
  yourColor,
  you,
  opponent,
  stepMain,
  stepTwo,
  handleHelp,
  activeHelpId,
  scores,
  times,
  hint,
  setHint,
  setResign,
  logsHint,
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
      <HelpWrapper>
        {/*Для тултипа у кнопки указывается data-tip и data-for */}
       
        {/*Сам тултип указывается id как и data-for у кнопки. Внутри компонента тултипа указывается описание */}


        <HelpItem
          data-tip
          data-for={laguageVariation["BestMove"]}
          active={activeHelpId === 1}
          onClick={(e) =>
            (scores && logsHint(e)) ||
            handleHelp({ type: "single", id: 1, count: 1 })
          }
        >
          {laguageVariation["BestMove"]}
        </HelpItem>
        <ReactTooltip
          id={laguageVariation["BestMove"]}
          type="success"
        >
          {laguageVariation['BestmoveDes']}
        </ReactTooltip>

        <HelpItem
          data-tip
          data-for={laguageVariation["GameDevelopment4"]}
          active={activeHelpId === 31}
          onClick={(e) =>
            (scores && logsHint(e)) ||
            handleHelp({ type: "futuredGame", id: 31, count: 4 })
          }
        >
          {laguageVariation["GameDevelopment4"]}
        </HelpItem>
        <ReactTooltip
          id={laguageVariation["GameDevelopment4"]}
          type="success"
        >
          {laguageVariation['GameDevelopment4Des']}
        </ReactTooltip>

        <HelpItem
          data-tip
          data-for={laguageVariation["TheOpponentsBestMove"]}
          active={activeHelpId === 2}
          onClick={(e) =>
            (scores && logsHint(e)) ||
            handleHelp({ type: "single_war", id: 2, count: 1 })
          }
        >
          {laguageVariation["TheOpponentsBestMove"]}
        </HelpItem>
        <ReactTooltip
          id={laguageVariation["TheOpponentsBestMove"]}
          type="success"
        >
          {laguageVariation['TheOpponentsBestMoveDes']}
        </ReactTooltip>
        <HelpItem
          data-tip
          data-for={laguageVariation["HeatmapDetailed"]}
          active={activeHelpId === HEATMAP_FULL}
          onClick={(e) =>
            (scores && logsHint(e)) ||
            handleHelp({ type: "map", id: HEATMAP_FULL })
          }
        >
          {laguageVariation["HeatmapDetailed"]}
        </HelpItem>
        <ReactTooltip
          id={laguageVariation["HeatmapDetailed"]}
          type="success"
        >
          {laguageVariation['HeatmapDetailedDes']}
        </ReactTooltip>
        <HelpItem
          data-tip
          data-for={laguageVariation["Showbest3"]}
          active={activeHelpId === 16}
          onClick={(e) =>
            (scores && logsHint(e)) ||
            handleHelp({ type: "multiple", multipleHandleCount: 4, id: 16 })
          }
        >
          {laguageVariation["Showbest3"]}
        </HelpItem>
        <ReactTooltip
          id={laguageVariation["Showbest3"]}
          type="success"
        >
          {laguageVariation['Showbest3Des']}
        </ReactTooltip>
        <HelpItem
          data-tip
          data-for={laguageVariation["WhichQuarter"]}
          active={activeHelpId === HEATMAP_ZONE_QUARTER}
          onClick={(e) =>
            (scores && logsHint(e)) ||
            handleHelp({ type: "map", id: HEATMAP_ZONE_QUARTER })
          }
        >
          {laguageVariation["WhichQuarter"]}
        </HelpItem>
        <ReactTooltip
          id={laguageVariation["WhichQuarter"]}
          type="success"
        >
          {laguageVariation['WhichQuarterDes']}
        </ReactTooltip>
        <HelpItem
          data-tip
          data-for={laguageVariation["TheBetterHalf"]}
          active={activeHelpId === 24}
          onClick={(e) =>
            (scores && logsHint(e)) || handleHelp({ type: "map", id: 24 })
          }
        >
          {laguageVariation["TheBetterHalf"]}
        </HelpItem>
        <ReactTooltip
          id={laguageVariation["TheBetterHalf"]}
          type="success"
        >
          {laguageVariation['TheBetterHalfDes']}
        </ReactTooltip>
        <HelpItem
          data-tip
          data-for={laguageVariation["Heatmap1"]}
          active={activeHelpId === HEATMAP_ZONE_QUARTER_ONE}
          onClick={(e) =>
            (scores && logsHint(e)) ||
            handleHelp({ type: "map", id: HEATMAP_ZONE_QUARTER_ONE, count: 1 })
          }
        >
          {laguageVariation["Heatmap1"]}
        </HelpItem>
        <ReactTooltip
          id={laguageVariation["Heatmap1"]}
          type="success"
        >
          {laguageVariation['Heatmap1Des']}
        </ReactTooltip>
        <HelpItem
          data-tip
          data-for={laguageVariation["Heatmap2"]}
          active={activeHelpId === 3}
          onClick={(e) =>
            (scores && logsHint(e)) ||
            handleHelp({ type: "map", id: HEATMAP_ZONE_QUARTER_ONE, count: 2 })
          }
        >
          {laguageVariation["Heatmap2"]}
        </HelpItem>
        <ReactTooltip
          id={laguageVariation["Heatmap2"]}
          type="success"
        >
           {laguageVariation['Heatmap2Des']}
        </ReactTooltip>
        <HelpItem
          data-tip
          data-for={laguageVariation["Heatmap3"]}
          active={activeHelpId === 4}
          onClick={(e) =>
            (scores && logsHint(e)) ||
            handleHelp({ type: "map", id: HEATMAP_ZONE_QUARTER_ONE, count: 3 })
          }
        >
          {laguageVariation["Heatmap3"]}
        </HelpItem>
        <ReactTooltip
          id={laguageVariation["Heatmap3"]}
          type="success"
        >
           {laguageVariation['Heatmap3Des']}
        </ReactTooltip>
        <HelpItem
          data-tip
          data-for={laguageVariation["Heatmap4"]}
          active={activeHelpId === 5}
          onClick={(e) =>
            (scores && logsHint(e)) ||
            handleHelp({ type: "map", id: HEATMAP_ZONE_QUARTER_ONE, count: 4 })
          }
        >
          {laguageVariation["Heatmap4"]}
        </HelpItem>
        <ReactTooltip
          id={laguageVariation["Heatmap4"]}
          type="success"
        >
           {laguageVariation['Heatmap4Des']}
        </ReactTooltip>
        <HelpItem
          data-tip
          data-for={laguageVariation["WhoWinning"]}
          active={activeHelpId === 34}
          onClick={(e) =>
            (scores && logsHint(e)) || handleHelp({ type: "score", id: 34 })
          }
        >
          {laguageVariation["WhoWinning"]}
        </HelpItem>
        <ReactTooltip
          id={laguageVariation["WhoWinning"]}
          type="success"
        >
          {laguageVariation['WhoWinningDes']}
        </ReactTooltip>
      </HelpWrapper>
    </Wrapper>
  );
};

export default Help;
