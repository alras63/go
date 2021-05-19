
import styled from "styled-components";
export const laguageArt = {
    "privateGame": {
        "ru": "Закрытая игры",
        "eng": "Private Game",
    },
    "gameAI": {
        "ru": "Игра с ИИ",
        "eng": "Game with AI",
    },
};

export const laguageVariation = {};

export function getLang(){
    var languageSelect = 'ru';

    if(localStorage.getItem('language') != null && localStorage.getItem('language') != ''){
        languageSelect = localStorage.getItem('language');
      }
      var keys = Object.keys(laguageArt);
        for(var i = 0; i < keys.length; i++){
        laguageVariation[keys[i]] = laguageArt[keys[i]][languageSelect];
        }
};


const Wrapper = styled.div`
`;


export const Buttonslang = ({history}) => {
    return (
        <Wrapper>
        <button onClick={function(){
            localStorage.setItem('language', 'ru');
            console.log(history);
           window.location.reload();
        }}>RUS</button>
          <button onClick={function(){
              console.log(history);
              localStorage.setItem('language', 'eng');
              window.location.reload();
          }}>ENG</button>
        </Wrapper>
        
    );
};

getLang();