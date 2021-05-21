import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Header } from "./components/Header";
import { Content, ContentOne } from "./components/Content";
import styled from "styled-components";
import { getProfile } from "../../store/Profile/actions";
import { getCurrentGame } from "../../store/GameCreate/actions";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Error } from "./components/Error/ErrorServer";
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  // padding-top: 170px;
`;

const Spinner = styled.div`
  margin: 0 auto;
  width: 126px;
  margin-bottom: 46px;
`;

const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left:0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  display: none;
`
const ErrorWrapper = styled.div`
  position: fixed;
  top: 0;
  left:0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  display: none;
`;

const ErrorBG = styled.div`
  background: #fff;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Main = ({ history, location }) => {
  const [searchType, setSearchType] = useState(location.state?.from ? location.state.from : '');
  const dispatch = useDispatch();
  const playerInfo = useSelector((state) => state.profile.userProfile.user);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getCurrentGame());
  }, [])

  if(!playerInfo) {
    return null;
  }

  return (
    <Wrapper>
      {/* <Header
        history={history}
        setSearchType={setSearchType}
        searchType={searchType}
        nickname={playerInfo.nickname}
        pts={playerInfo.pts}
        avatar={playerInfo.avatar}
        winrate={playerInfo.winrate}
      /> */}
      <Content
        history={history}
        searchType={searchType}
        setSearchType={setSearchType}
        nickname={playerInfo.nickname}
        pts={playerInfo.pts}
        avatar={playerInfo.avatar}
      />

      <SpinnerWrapper id="loadingWrapper">
      <Spinner>
        <Loader type="Grid" color="#3b3b3b" height={126} width={126} />
      </Spinner>
      </SpinnerWrapper>
      <ErrorWrapper  id="errorWrapper">
        <ErrorBG>
        <Error
            error="Не удалось подключиться к серверу"
          />
        </ErrorBG>
      </ErrorWrapper>
    </Wrapper>
  );
};

export default Main;
