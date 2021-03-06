import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../Main/components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getLiders } from "../../store/Profile/actions";
import {isMobile} from 'react-device-detect';

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: flex-start;
  padding-top: 200px;
  padding-left: 20px;
  padding-right: 20px;
  overflow-x: hidden;
`;

const LidersCont = styled.div`
  width: 90%;
  max-height: ${props => !isMobile ? '590px' : '100%'};
  overflow-y: ${props => !isMobile ? 'scroll' : 'initial'};;
  display: flex;
  flex-wrap: wrap;
`;

const Lider = styled.div`
  width: ${props => !isMobile ? '50%' : '100%'};
  display: ${props => !isMobile ? 'flex' : 'block'};
  margin-bottom: 30px;
  align-items: center;
`;

const LiderImg = styled.img`
  width: 53px;
  height: 53px;
  border-radius: 50%;
`;
const Name = styled.div`
  width:50%;
  position: relative;
  display: flex;
  align-items: center;
  :after{
    content: '';
    width: 100%;
    height: 1px;
    background: #C4C4C4;
    position: absolute;
    left: 0;
    z-index: -1;
  }
`;
const SubName = styled.div`
  width: auto;
  font-weight: bold;
  padding: 0 10px;
  font-size: 18px;
  background-color: #FFF;
  z-index: 10;
`;
const Rating = styled.div`
  width: 30%;
  font-size: 18px;
  position: relative;
  display: flex;
  align-items: center;
  :after{
    content: '';
    width: 100%;
    height: 1px;
    background: #000000;
    position: absolute;
    left: 0;
    z-index: 0;
  }
`;
const Rate = styled.div`
  width: auto;
  color: #797979;
  background-color: #FFF;
  position: relative;
  z-index: 10;
  padding: 0 10px;
`;
const Scores = styled.div`
  width: 20%;
  font-size: 24px;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;
const Red = styled.div`
  color: red;
`;
const Green = styled.div`
  color: green;
`;

export const Liders = ({ history }) => {

  const dispatch = useDispatch();
  const [nickname, setNickname] = useState('')
  const [list, setList] = useState([])
  const liders = useSelector((state) => state.profile.liders);

  useEffect(() => {
    dispatch(getLiders())
  }, [])

  useEffect(() => {
    if (nickname && (nickname !== '')) {
      setList(liders.filter(item => item.nickname.indexOf(nickname) !== -1 || item.id.toString().indexOf(nickname) !== -1));
    } else {
      setList(liders)
    }
  }, [nickname, liders])
  return (
    <Wrapper>
      <Header
        history={history}
        profile={true}
        setSearchType={() => console.log()}
        setNicknameFunc={(val) => setNickname(val)}
      />
      <LidersCont>
        {
          list.map((item, i) => {
            return (
              <Lider key={i}>
                <LiderImg src={item.avatar} />
                <Name>
                  <SubName>
                    {item.id} - {item.nickname}
                  </SubName>
                </Name>
                <Rating>
                  <Rate>
                    {item.pts}pts / {item?.position}th
                  </Rate>
                </Rating>
                <Scores>
                  <Red>
                    {item.winrate.split('/')[0]}
                  </Red>
                  &nbsp;/&nbsp;
                  <Green>
                    {item.winrate.split('/')[1]}
                  </Green>
                </Scores>
              </Lider>
            )
          })
        }
      </LidersCont>
    </Wrapper>
  );
};

export default Liders;
