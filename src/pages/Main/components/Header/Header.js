import React from "react";
import styled from "styled-components";
import Logo from "../../../../assets/img/logo.png";
import AvatarImage from "../../../../assets/img/avatar.png";
import { MAIN_URL, PROFILE_URL } from "../../../../constants/routes";
import { ButtonCustom } from "../../../../components/ButtonCustom";
import { Input } from "../../../../components/InputCustom";
import { laguageVariation } from "../../../../language";
import {isMobile} from 'react-device-detect';
const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 35px;
  display: ${props => !isMobile ? 'flex' : 'block'};
  justify-content: flex-start;
  position: absolute;
  width:  ${props => !props.profile ? '100%' : '90%'};
  top: 0;

  
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: auto;
  flex-shrink: 1;
`;
const Right = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const RightContent = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;

const RightSearch = styled.div`
  display: ${props => !isMobile ? 'flex' : 'block'};
  align-items: center;
  justify-content: flex-end;
  flex-wrap: no-wrap;
  cursor: pointer;
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Logotype = styled.img`
  width: 60px;
  height: auto;
  margin-right: 14px;
`;

const Name = styled.p`
  font-size: 28px;
  line-height: 56px;
  font-weight: 700;
`;

const ScoreWrapper = styled.div`
  display: flex;
`;

const Pts = styled.p`
  font-size: 18px;
  line-height: 23px;
  color: #5b5b5b;
`;

const Avatar = styled.img`
  border-radius: 100px;
  margin-left: 20px;
  width: 115px;
`;

const Search = styled.img`
  border-radius: 100px;
  margin-left: 20px;
  width: 115px;
`;

export const Header = ({
  history,
  setSearchType,
  searchType,
  nickname,
  pts,
  winrate,
  avatar,
  profile,
  setNicknameFunc
}) => (
  <Wrapper profile={profile? true : false}>
    <Left
      onClick={() => {
        if (searchType !== "ConnectRandom" && searchType !== "ConnectCode") {
          history.push(MAIN_URL);
          setSearchType("");
        }
      }}
    >
      <Logotype alt="logo" src={Logo} />
    </Left>
    {!profile ? (
      <Right>
        <RightContent onClick={() => {
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
        </RightContent>
      </Right>
    ) : (
      <RightSearch>
        <Input
          onChange={(e) => setNicknameFunc(e)}
          width="100%"
          mr={40}
          fontSize={24}
          color="#000"
          textAlign="left"
          placeholder={laguageVariation['Entertheplayersnickname']}
        />
        <ButtonCustom width="auto" onClick={() => {
          history.push(MAIN_URL)
          setSearchType("")
        }} padding="0 20px">
         {laguageVariation['BackToMenu']}
        </ButtonCustom>
      </RightSearch>
    )}
  </Wrapper>
);
