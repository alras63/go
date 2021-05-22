import React, {useState} from "react";
import ReactDOM from 'react'
import { useDispatch, useSelector } from "react-redux";
//import { Goban } from "react-goban";
import { Goban } from "../../../../react-goban";
import { viewDih } from "./ViewDih";
import styled from "styled-components";
import { markersClear, setMapStones } from "../../../../store/Board/actions";
import { client } from "../../../../Socket";
import send from './../../../../api/Send';
import { laguageVariation } from "../../../../language";
import bg from "../../../../assets/img/bg.jpg";
import {isMobile} from 'react-device-detect';

const Text = styled.p`
  font-size: 24px;
  line-height: 28px;
  margin-right: 32px;
  cursor: pointer;
  width: 45%;
  background-color: #EBEBEB;
  text-align: center;
  padding: 10px 0px;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  width:  ${props => !isMobile ? '50%' : '100%'};
  display: flex;
flex-direction: column;
  position: relative;
  display: flex;
align-items: center;
justify-content: center;
background-image: url(${bg});
background-blend-mode: multiply;
background-color: #786354;
  & > div {
    top: 0;
    right: 0;
    left: 0;
  }
  &>.react-goban{
    width:  ${props => !isMobile ? '65%' : '100%'};
    background-color: #b4916c;
  }
  & svg {
    width: 100%;
    height: 100%;
  }
`;

const ButtonsBoard = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const steps = [];


const Board = ({
  lastMarkers,
  socket,
  setHint,
  currentColor,
  setCurrentColor,
  yourColor,
  helpType,
  setMultipleHint,
  multipleHint,
  coordinates,
  setCoordinates,
  mapMap,
  setHelpType,
  setMultipleType,
  setActiveHelpId,
  setMapType,
  setStonePosition,
  classNames,
  mapStones,
  setPass,
  setResign
}) => {
  const dispatch = useDispatch();
  const markers = useSelector((state) => state.board.markers);
  const classNamesMapStones = useSelector(
    (state) => state.board.classNamesMapStones
  );
  
  const isInArray = function(array, value) {
		for (var i=0; i<array.length; i++) {
			if (array[i] == value) {
				return true;
			}
		}
		return false;
	};

  let LAST_STEP = '';

  var getSosedi = function(point){
    var columnStep = point[0];
    var rowStep = parseInt(point[1]+point[2]);
    var colorVrag = yourColor === "white" ? "black" : "white";
    let alpha = 'ABCDEFGHJKLMNOPQRSTUV'
    var numberColumn = alpha.indexOf(columnStep, 0);

    return [
      alpha[numberColumn-1]+rowStep,
      alpha[numberColumn+1]+rowStep,
      alpha[numberColumn]+(rowStep+1),
      alpha[numberColumn]+(rowStep-1)
    ];
  };

  const getCapturedPoints = function(point, sosedi11) {	
		var capPoints = new Array();
		var sosedi = getSosedi(point);

		// Check for captures in every direction
		for (var i = 0; i < sosedi.length; i++) {
			var side = sosedi[i];
      
			// Check for captures at neighboring point (nPoint)
      if (coordinates[side] != yourColor && coordinates[side] !== undefined) {
          //console.log(getLibertyPoints(side));
					if (!isInArray(capPoints, side) && getLibertyPoints(side).length == 0) {
            //console.log(point+' !!!!!!!!!!!');
            //console.log(side);
					  	capPoints = capPoints.concat(side);
					}
				}
		}
    //console.log(capPoints);
		return capPoints;
	};
  
  var getLibertyPoints = function(point, chainPoints, libPoints) {	
		// If chainPoints or libPoints are null, make them empty arrays
		chainPoints = chainPoints || new Array();
		libPoints = libPoints || new Array();
		
		// Check for liberties in every direction
    var sosedi = getSosedi(point);
		for (var i = 0; i < sosedi.length; i++) {
			var side = sosedi[i];
				if (coordinates[side] == coordinates[point]) {
          //console.log('nado');
        //console.log(coordinates[side] +'=>'+ yourColor);
       // console.log('nado');
					// Same piece. Add that piece's liberties to this chain's liberties.
					chainPoints.push(point);
					if (!isInArray(chainPoints,side)) {
						// TODO: find out why this works
						getLibertyPoints(side, chainPoints, libPoints);
					}
				}
				else if (coordinates[side] === undefined && side !== LAST_STEP) {
					// Empty. Add one liberty (if it's new).
					if (!isInArray(libPoints, side)) {
						libPoints.push(side);
					}
        }
		}
		return libPoints;
	};
  
  const handleTurn = (stonePosition) => {
    //send(JSON.stringify([7, "go/game", {command: "move", token: "1cfc52aacaba0507e66d74cd878020f071457220", place: stonePosition.toString().toLowerCase(), game_id: 8}]));
    let valid = true;
    var testCords = {};
    for (const key in coordinates) {
      testCords[key] = coordinates[key];
      if (key === stonePosition) {
        valid = false;
      }
    }
    //testCords.push(stonePosition, yourColor);
    // testCords[stonePosition] = yourColor;
    // testCords.map();
    //console.log(testCords);
    LAST_STEP = stonePosition;

    var columnStep = stonePosition[0];
    var rowStep = parseInt(stonePosition[1]+stonePosition[2]);
    var colorVrag = yourColor === "white" ? "black" : "white";
    let alpha = 'ABCDEFGHJKLMNOPQRSTUV'
    var numberColumn = alpha.indexOf(columnStep, 0);

    var sosedi = [
      alpha[numberColumn-1]+rowStep,
      alpha[numberColumn+1]+rowStep,
      alpha[numberColumn]+(rowStep+1),
      alpha[numberColumn]+(rowStep-1)
    ];
    var captures = getCapturedPoints(stonePosition, sosedi);
    if(
         (numberColumn == 0 || (coordinates[alpha[numberColumn-1]+rowStep] !== undefined && coordinates[alpha[numberColumn-1]+rowStep] == colorVrag)) &&
         (numberColumn == 12 || (coordinates[alpha[numberColumn+1]+rowStep] !== undefined && coordinates[alpha[numberColumn+1]+rowStep] == colorVrag)) &&
         (rowStep == 13 || (coordinates[alpha[numberColumn]+(rowStep+1)] !== undefined && coordinates[alpha[numberColumn]+(rowStep+1)] == colorVrag)) &&
         (rowStep == 1 || (coordinates[alpha[numberColumn]+(rowStep-1)] !== undefined && coordinates[alpha[numberColumn]+(rowStep-1)] == colorVrag)) &&
         captures.length == 0
     ){
        valid = false;
        alert(laguageVariation['SuicideAlert']);
    }
    if(steps[steps.length-1] == stonePosition){
      valid = false;
        alert('КО-борьба');
    }

    if (valid && currentColor === yourColor) {
      steps.push(stonePosition);
      setStonePosition(stonePosition)
      //setCoordinates({ ...coordinates, [stonePosition]: currentColor });
      setCurrentColor(currentColor === "white" ? "black" : "white");
      setHint(false);
      dispatch(markersClear());
      setHelpType("");
      setActiveHelpId("");
      setMultipleType(false);
      setMapType(false);
    }
    viewDih(stonePosition, coordinates, yourColor);
  };

  const handleMultipleTurn = (stonePosition) => {
    let valid = true;
    for (const key in coordinates) {
      if (key === stonePosition) {
        valid = false;
      }
    }
    if (valid) {
      dispatch(setMapStones({ ...mapStones, [stonePosition]: 'circle' }))
      setMultipleHint(stonePosition);
      //setCoordinates({ ...coordinates, [stonePosition]: currentColor });
    }
  };

  let className;
  if (currentColor !== yourColor) {
    className = 'disabled'
  } else {
    className = ''
  }

  return (
    <Wrapper className={className}>
        <Goban
          style={{ position: "absolute" }}
          stones={coordinates}
          markers={markers}
          lastMarkers={lastMarkers}
          mapStones={mapStones}
          classNamesMapStones={classNamesMapStones}
          onIntersectionClick={
            helpType !== "multiple" ? handleTurn : handleMultipleTurn
          }
          nextToPlay={yourColor}
        />

        <ButtonsBoard>
        <Text onClick={() => setPass()}>{laguageVariation['Pass']}</Text>
            <Text onClick={() => setResign()}>{laguageVariation['Surrender']}</Text>
        </ButtonsBoard>
    </Wrapper>
  );
};


export default Board;
