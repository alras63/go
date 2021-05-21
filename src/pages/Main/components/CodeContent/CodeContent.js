import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import styled from "styled-components";
import { ButtonCustom } from "../../../../components/ButtonCustom";
import { Input } from "../../../../components/InputCustom";
import { clearGameId, createGameCode, joinGameWithCode } from "../../../../store/GameCreate/actions";
import { client, token } from "../../../../Socket";
import send from './../../../../api/Send';
import { laguageVariation } from "../../../../language";

const Text = styled.p`
  font-size: 28px;
  line-height: 42px;
  text-align: center;
`;

const CustomCodeContent = ({ setSearchType, setContentType }) => (
  <>
    <Text>{laguageVariation['ClosedGame']}</Text>
    <ButtonCustom mt={40} mb={30} onClick={() => setContentType("CreateGame")}>
      {laguageVariation['CreateGame']}
    </ButtonCustom>
    <ButtonCustom mb={30} onClick={() => setContentType("JoinGame")}>
      {laguageVariation['Join']}
    </ButtonCustom>
    <ButtonCustom onClick={() => setSearchType("")}>{laguageVariation['Cancel']}</ButtonCustom>
  </>
);

const CreateGame = ({ setSearchType, cancelGame, code }) => (
  <>
    <Text>{laguageVariation['YourGameCode']}:</Text>
    <Input value={code || laguageVariation['Waiting']} textAlign="center" disabled mt={40} mb={30} color={"#000"} />
    <ButtonCustom mb={30} onClick={() => setSearchType("CodeEnter")}>
      {laguageVariation['StartTheGame']}
    </ButtonCustom>
    <ButtonCustom onClick={() => cancelGame()}>{laguageVariation['Cancel']}</ButtonCustom>
  </>
);

const JoinGame = ({ setSearchType, cancelGame, code, setCode }) => (
  <>
    <Text>{laguageVariation['EntertheGameCode']}:</Text>
    <Input mt={30} mb={30} onChange={setCode} name="code"   color={"#000"} border={"1px solid #000"} />
    <ButtonCustom
      mb={30}
      disabled={!code}
      onClick={() => code && setSearchType("CodeEnter")}
    >
      {laguageVariation['Join']}
    </ButtonCustom>
    <ButtonCustom onClick={() => cancelGame()}>{laguageVariation['Cancel']}</ButtonCustom>
  </>
);

export const CodeContent = ({ gameId, setSearchType }) => {
  const [code, setCode] = useState("");
  const [contentType, setContentType] = useState("");
  const dispatch = useDispatch();
  const codeGame = useSelector(state => state.createGame.code);

  useEffect(() => {
    if (contentType === "CreateGame") {
      dispatch(createGameCode());
    }
  }, [contentType]);

  const getGameId = async (val) => {
    if (val === "CodeEnter") {
      if (code) {
        await dispatch(joinGameWithCode(code));
      }
    } else {
      setSearchType(val)
    }
  }

  const cancelGame = async () => {
    send(JSON.stringify([7, "go/game", {command: "resign", token: token, game_id: gameId}]));
    await dispatch(clearGameId())
    setSearchType("")
  }

  return (
    <>
      {!contentType ? (
        <CustomCodeContent
          setSearchType={setSearchType}
          setContentType={setContentType}
        />
      ) : null}
      {contentType === "CreateGame" ? (
        <CreateGame cancelGame={()=>cancelGame()} setSearchType={setSearchType} code={codeGame} />
      ) : null}
      {contentType === "JoinGame" ? (
        <JoinGame cancelGame={()=>cancelGame()} setSearchType={(val) => getGameId(val)} code={code} setCode={(val) => setCode(val)} />
      ) : null}
    </>
  );
};
