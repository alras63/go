import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ButtonCustom } from "../../../../components/ButtonCustom";
import { CodeContent } from "../CodeContent";
import { Connect } from "../Connect";
import { LoadingGame } from "../LoadingGame";
import { Winner } from "../Winner";
import { Error } from "../Error";
import { INFO_URL, PROFILE_URL } from "../../../../constants/routes";

import {Buttonslang, laguageVariation} from '../../../../language';

import { EDUCATION, HINTS } from "../../../../constants/routes";
import { createRandomGame, createGameWithAi } from "../../../../store/GameCreate/actions";
import { useDispatch, useSelector } from "react-redux";
import { ButtonCustomAndArrow, ButtonCustomForm } from "../../../../components/ButtonCustom";
import Logo from "../../../../assets/img/logo.png";
import Grafik from '../../../../assets/img/grafik.png'

const Wrapper = styled.div`
  // width: 613px;
  // margin: 0 auto;
  width: 100vw;
  min-height: 100%;

  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 20px 0px;
`;

const ContainerOne = styled.div`
  background-color: #786354;
  width: 100%;
  // margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`;

const Form = styled.form`
  margin-top: 20px;
`;

const Top = styled.div`
  display: flex;
  align-self: flex-start;
  margin-bottom: 49px;
  color: #000;
  font-size: 28px;
  align-items: center;
`;

const Logotype = styled.img`
  height: auto;
  width: 60px;
  margin-right: 20px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Tab = styled.p`
  cursor: pointer;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => (props.active ? "#000000" : "#838383")};
  font-weight: 700;
`;
const Span = styled.p`
  font-size: 24px;
  line-height: 28px;
  color: #838383;
  font-weight: 700;
  margin-left: 5px;
  margin-right: 5px;
`;

const Left = styled.div`
  width: 40%;
  min-height: 100%;
  display: flex;
flex-direction: column;
background-color: #fff;
color: #000;
padding: 30px
`;

const Titlemain = styled.h1`
  color: #000;
  font-size: 28px;
  margin-bottom: 0px;
  flex: 0 0 auto;

`;

const ContantMain = styled.div`
flex: 1 0 auto;
`;

const FooterMain = styled.div`
font-size: 18px;
font-weight: bold;

color: #000;
flex: 0 0 auto;
`;


const FixedBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5)
`;

const FixedBlockContainer = styled.div`
  max-width: 70%;
  background: #fff;
  padding: 30px;

`

const ContentMainBoard = (setSearchType, searchType, history, gameId) => {
  const [opponent, setOpponent] = useState({})
  const [code, setCode] = useState('')
  
  switch (searchType) {
    case "Code":
      return <CodeContent gameId={gameId} setSearchType={setSearchType} />;

    case "Random":
      return (
        
        <LoadingGame
          gameId={gameId}
          setSearchType={setSearchType}
          text="Ожидание случайного соперника"
          setOpponent={setOpponent}
          searchType={searchType}
        />
      );

    case "CodeEnter":
      return (
        <LoadingGame
          gameId={gameId}
          setSearchType={setSearchType}
          setOpponent={setOpponent}
          code={code}
          text="Ожидание второго игрока"
          searchType={searchType}
        />
      );

    case "ConnectRandom":
      return (
        <Connect
          history={history}
          opponent={opponent}
          setSearchType={setSearchType}
          text="Противник найден!"
        />
      );

    case "ConnectCode":
      return (
        <Connect
          history={history}
          opponent={opponent}
          setSearchType={setSearchType}
          text="Игрок подключился!"
        />
      );

    case "Win":
      return <Winner setSearchType={setSearchType} />;

    case "Error":
      return (
        <Error
          error="Не удалось подключиться к запрашиваемой игре"
          setSearchType={setSearchType}
        />
      );

    default:
  }
};

const Right = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const PlayerInfo = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  flex-direction: row-reverse;
`;

export const Content = ({ history, searchType, setSearchType,  nickname, pts, avatar, winrate }) => {
  const dispatch = useDispatch();
  const gameId = useSelector(state => state.createGame.id);

  useEffect(async () => {
    if (searchType === "Random") await dispatch(createRandomGame())
    if (searchType === "WithAi") await dispatch(createGameWithAi())
  }, [searchType])

  return (
    <Wrapper>
      <ContainerOne>
        <Left>
          <Buttonslang history={history}/>
          <Titlemain>
            <Top>
              <Logotype alt="logo" src={Logo} />
              {laguageVariation["GoStrategist"]}
              <PlayerInfo onClick={() => {
            if (searchType !== "ConnectRandom" && searchType !== "ConnectCode") {
              history.push(PROFILE_URL);
              setSearchType("");
            }
          }}>
            <Info>
              <Name>{nickname || ""}</Name>
              <ScoreWrapper>
                <Pts style={{ marginRight: 16 }}>{pts || 0}pts</Pts>
                <Pts>{winrate || ""}</Pts>
              </ScoreWrapper>
            </Info>
            <Avatar alt="avatar" src={avatar} />
          </PlayerInfo>
            </Top>
            
            {/* Эффективная система подсказок в игре Го */}
          </Titlemain>
          <ContantMain>
            <ButtonCustomAndArrow textColor="#000" mb={0} onClick={() => history.push('/gameBoard')} disabled={gameId === null}>
              {laguageVariation['continue']}
          </ButtonCustomAndArrow>
   
            <ButtonCustomAndArrow  textColor="#000" mb={0} onClick={() => { document.getElementById('overflow-wrapper').style.display = "flex"; setSearchType("Random")}} disabled={gameId !== null}>
              {laguageVariation['PlayWithARandomOpponent']}
          </ButtonCustomAndArrow>
            <ButtonCustomAndArrow mb={0} onClick={() => {document.getElementById('overflow-wrapper').style.display = "flex"; setSearchType("WithAi")}} disabled={gameId !== null}>

              {laguageVariation['gameAI']}
          </ButtonCustomAndArrow>
            <ButtonCustomAndArrow onClick={() => {document.getElementById('overflow-wrapper').style.display = "flex";setSearchType("Code")}} mb={0} disabled={gameId !== null}>
  {laguageVariation['privateGame']}
          </ButtonCustomAndArrow>
          <ButtonCustomAndArrow
              onClick={() => {
                history.push(EDUCATION);
                setSearchType("");
              }}
            >
              {laguageVariation['learning']}
          </ButtonCustomAndArrow>{" "}
          <ButtonCustomAndArrow  onClick={() => {
                history.push(HINTS);
                setSearchType("");
              }}>{laguageVariation['Hints']}</ButtonCustomAndArrow> {" "}
            <ButtonCustomAndArrow mb={0} onClick={() => history.push('/liders')}>{laguageVariation['RatingPlayer']}</ButtonCustomAndArrow>{" "}
            <ButtonCustomAndArrow
              onClick={() => {
                history.push(INFO_URL);
                setSearchType("");
              }}
            >
              {laguageVariation['Information']}
          </ButtonCustomAndArrow>{" "}
          </ContantMain>
          <FooterMain>
            SGK Team, 2021
          </FooterMain>
        </Left>
      </ContainerOne>
      {!searchType ? (
        <>

        </>
      ) : null}
      <FixedBlock class={searchType === "" ? 'hidden' : searchType} id="overflow-wrapper" >
        <FixedBlockContainer>
          
          {ContentMainBoard(setSearchType, searchType, history, gameId)}
        </FixedBlockContainer>
      </FixedBlock>
    </Wrapper>
  );
};


const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;


const Name = styled.p`
  font-size: 28px;
  line-height: 56px;
  font-weight: 700;
  margin-left: 30px;
`;

const ScoreWrapper = styled.div`
  display: flex;
`;

const Pts = styled.p`
  font-size: 18px;
  line-height: 16px;
  color: #5b5b5b;
`;

const Avatar = styled.img`
  border-radius: 100px;
  margin-left: 120px;
  width: 70px;
`;

const Search = styled.img`
  border-radius: 100px;
  margin-left: 20px;
  width: 115px;
`;

const Images = styled.img``;

export const ContentOne = ({ history, searchType, setSearchType, nickname, pts, avatar, winrate }) => {
  const dispatch = useDispatch();
  const gameId = useSelector(state => state.createGame.id);

  useEffect(async () => {
    if (searchType === "Random") await dispatch(createRandomGame())
    if (searchType === "WithAi") await dispatch(createGameWithAi())
  }, [searchType])

  return (
    <Wrapper>
      <Container>
        <Right>
      
        </Right>
        
      </Container>
 
      {!searchType ? (
        <>

        </>
      ) : null}
      <FixedBlock class={searchType === "" ? 'hidden' : searchType} id="overflow-wrapper" >
        <FixedBlockContainer>
          
          {ContentMainBoard(setSearchType, searchType, history, gameId)}
        </FixedBlockContainer>
      </FixedBlock>
    </Wrapper>
  );
};
