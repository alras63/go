import React from "react";
import styled from "styled-components";
import Players from "../GameInfo/components/Players/Players";
import TabsHelp from '../ButtonsBoard/ButtonsBoard'
import {
  HEATMAP_FULL,
  HEATMAP_ZONE_QUARTER,
  HEATMAP_ZONE_QUARTER_ONE,
} from "./types";
import { laguageVariation } from "../../../../language";
import { isMobile } from "react-device-detect";
/*Отвечает за тултипы */
import ReactTooltip from 'react-tooltip';


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
    logsHint
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
       <TabsHelp hint={hint} setHint={setHint} setResign={setResign}/>
      <HelpWrapper>
        {/*Для тултипа у кнопки указывается data-tip и data-for */}
      <HelpItem
          data-tip 
          data-for={laguageVariation['CaptureOfTheInitialTerritory']}
          active={activeHelpId === 22}
          onClick={(e) =>
            scores && logsHint(e) || handleHelp({ type: "map", id: 22 })
          }
        >
          {laguageVariation['CaptureOfTheInitialTerritory']}
        </HelpItem>
        
        {/*Сам тултип указывается id как и data-for у кнопки. Внутри компонента тултипа указывается описание */}

        <ReactTooltip id={laguageVariation['CaptureOfTheInitialTerritory']} type='success'>
          Описание сценария/Подсказки. Мультиязычное!
        </ReactTooltip>

        <HelpItem
          active={activeHelpId === 1}
          onClick={(e) =>
            scores && logsHint(e) || handleHelp({ type: "single", id: 1, count: 1 })
          }
        >
          {laguageVariation['BestMove']}
        </HelpItem>
		
		<HelpItem
          active={activeHelpId === 31}
          onClick={(e) =>
            scores && logsHint(e) || handleHelp({ type: "futuredGame", id: 31, count: 4 })
          }
        >
          {laguageVariation['GameDevelopment4']}
        </HelpItem>
		
		
		<HelpItem
          active={activeHelpId === 2}
          onClick={(e) =>
            scores && logsHint(e) || handleHelp({ type: "single_war", id: 2, count: 1 })
          }
        >
          {laguageVariation['TheOpponentsBestMove']}
        </HelpItem>
        <HelpItem
          active={activeHelpId === HEATMAP_FULL}
          onClick={(e) =>
            scores && logsHint(e) || handleHelp({ type: "map", id: HEATMAP_FULL })
          }
        >
          {laguageVariation['HeatmapDetailed']}
        </HelpItem>
        <HelpItem
          active={activeHelpId === 16}
          onClick={(e) =>
            scores && logsHint(e) ||
            handleHelp({ type: "multiple", multipleHandleCount: 4, id: 16 })
          }
        >
          {laguageVariation['Showbest3']}
        </HelpItem>
		
		
        <HelpItem
          active={activeHelpId === HEATMAP_ZONE_QUARTER}
          onClick={(e) =>
            scores && logsHint(e) || handleHelp({ type: "map", id: HEATMAP_ZONE_QUARTER })
          }
        >
          {laguageVariation['WhichQuarter']}
        </HelpItem>
		<HelpItem
          active={activeHelpId === 24}
          onClick={(e) =>
            scores && logsHint(e) || handleHelp({ type: "map", id: 24 })
          }
        >
          {laguageVariation['TheBetterHalf']}
        </HelpItem>
		
		<HelpItem
          active={activeHelpId === HEATMAP_ZONE_QUARTER_ONE}
          onClick={(e) =>
			scores && logsHint(e) || handleHelp({ type: "map", id: HEATMAP_ZONE_QUARTER_ONE, count: 1 })
          }
        >
          {laguageVariation['Heatmap1']}
        </HelpItem>
		
		<HelpItem
          active={activeHelpId === 3}
          onClick={(e) =>
			scores && logsHint(e) || handleHelp({ type: "map", id: HEATMAP_ZONE_QUARTER_ONE, count: 2 })
          }
        >
          {laguageVariation['Heatmap2']}
        </HelpItem>
		<HelpItem
          active={activeHelpId === 4}
          onClick={(e) =>
			scores && logsHint(e) || handleHelp({ type: "map", id: HEATMAP_ZONE_QUARTER_ONE, count: 3 })
          }
        >
          {laguageVariation['Heatmap3']}
        </HelpItem>
		<HelpItem
          active={activeHelpId === 5}
          onClick={(e) =>
			scores && logsHint(e) || handleHelp({ type: "map", id: HEATMAP_ZONE_QUARTER_ONE, count: 4 })
          }
        >
          {laguageVariation['Heatmap4']}
        </HelpItem>
		
		
        <HelpItem
          active={activeHelpId === 34}
          onClick={(e) => scores && logsHint(e) || handleHelp({ type: "score", id: 34 })}
        >
         {laguageVariation['WhoWinning']}
        </HelpItem>
      </HelpWrapper>
    </Wrapper>
  );
};




export default Help;
