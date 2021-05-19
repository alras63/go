import styled from "styled-components";
export const laguageArt = {
    "GoStrategist":{
        "ru": "Го Стратег",
        "eng": "GO Strategist"
    },
    "privateGame": {
        "ru": "Закрытая игры",
        "eng": "Private Game",
    },
    "gameAI": {
        "ru": "Игра с ИИ",
        "eng": "Game with AI",
    },
    "learning": {
        "ru": "Обучение",
        "eng": 'Learning'
    },
    "continue": {
        "ru": "Продолжить игру",
        "eng": 'Continue playing'
    },
    "PlayWithARandomOpponent": {
        "ru": "Игра со случайным соперником",
        "eng": 'Play with a random opponent'
    },
    "Hints":{
        "ru":  "Подсказки",
        "eng": "Hints"
    },
    "RatingPlayer":{
        "ru": "Рейтинг игроков",
        "eng":"Player ratings"
    },
    "Information":{
        "ru": "Информация для участников",
        "eng":"Information for participants"
    },
    "File":{
        "ru": "Файл",
        "eng": "File"
    },
    "Log":{
        "ru": "Лог",
        "eng": "Log"
    },
    "Profile":{
        "ru": 'Профиль пользователя',
        "eng": 'User Profile'
    },
    "NickName":{
        "ru": 'Имя пользователя',
        "eng": 'NickName'
    },
    "Rating":{
        "ru": 'Рейтинг',
        "eng": 'Rating'
    },
    "PlayerLvl":{
        "ru": 'Начинающий игрок',
        "eng": 'Beginner player'
    },
    "UserParties":{
        "ru": 'Партии пользователя',
        "eng": 'User parties'
    },
    "BackToMenu":{
        'ru': 'В меню',
        "eng": 'Back to menu'
    },
    "SuicideAlert":{
        'ru': 'Совершать самоубийство запрещено',
        'eng': 'It is forbidden to commit suicide'
    },
    "Pass":{
        'ru': 'Пас',
        'eng': 'Pass'
    },
    "Surrender":{
        'ru': 'Сдаться',
        'eng': 'Surrender'
    },
    "CaptureOfTheInitialTerritory":{
        'ru': 'Захват начальной территории',
        'eng': 'Capture of the initial territory'
    },
    "BestMove":{
        'ru': 'Лучший ход',
        'eng': 'Best move'
    },
    "TheOpponentsBestMove":{
        'ru': 'Лучший ход соперника',
        'eng': 'The opponents best move'
    },
    "HeatmapDetailed":{
        'ru': 'Тепловая карта всей доски. Детализированная ',
        'eng': 'Heat map of the entire board. Detailed information'
    },
    "GameDevelopment4":{
        'ru': 'Развитие игры на 4 хода вперёд',
        'eng': 'Game development for 4 moves ahead'
    },

    "Showbest3":{
        'ru': 'Показать лучший из заданных 3 ходов',
        'eng': 'Show the best of the given 3 moves'
    },
    "WhichQuarter":{
        'ru': 'В какой четверти доски сейчас лучший ход?',
        'eng': 'Which quarter of the board is the best move right now?'
    },
    "TheBetterHalf":{
        'ru': 'Лучшая половина',
        'eng': 'The better half'
    },
    "Heatmap1":{
        'ru': 'Тепловая карта 1-ой четверти доски',
        'eng': 'Heat map of the 1st quarter of the board'
    },
    "Heatmap2":{
        'ru': 'Тепловая карта 2-ой четверти доски',
        'eng': 'Heat map of the 2nd quarter of the board'
    },
    "Heatmap3":{
        'ru': 'Тепловая карта 3-ей четверти доски',
        'eng': 'Heat map of the 3rd quarter of the board'
    },
    "Heatmap4":{
        'ru': 'Тепловая карта 4-ой четверти доски',
        'eng': 'Heat map of the 4th quarter of the board'
    },
    "WhoWinning":{
        'ru': ' Кто побеждает на данный момент?',
        'eng': 'Who is winning at the moment?'
    },
    "Twoquarterattack":{
        'ru': 'Атака по двум четвертям',
        'eng': 'Two-quarter attack'
    },
    "Protection":{
        'ru': 'Защита',
        'eng': 'Protection'
    },
    "KeepPlaying":{
        'ru': 'Продолжать играть?',
        'eng': 'Keep playing?'
    },
    "Scenarios":{
        'ru': 'Сценарии',
        'eng': 'Scenarios'
    },
    "GameProgress":{
        'ru': 'Ход игры',
        'eng': 'Game progress'
    },
    "Protection":{
        'ru': 'Защита',
        'eng': 'Protection'
    },
    "Protection":{
        'ru': 'Защита',
        'eng': 'Protection'
    },
};

export const laguageVariation = {};

export function getLang() {
    var languageSelect = 'ru';

    if (localStorage.getItem('language') != null && localStorage.getItem('language') != '') {
        languageSelect = localStorage.getItem('language');
    }
    var keys = Object.keys(laguageArt);
    for (var i = 0; i < keys.length; i++) {
        laguageVariation[keys[i]] = laguageArt[keys[i]][languageSelect];
    }
};


const Wrapper = styled.div `
`;


export const Buttonslang = ({ history }) => {
    return ( <Wrapper >
        <button onClick = {
            function() {
                localStorage.setItem('language', 'ru');
                console.log(history);
                window.location.reload();
            }
        } > RUS </button> <button onClick = {
            function() {
                console.log(history);
                localStorage.setItem('language', 'eng');
                window.location.reload();
            }
        } > ENG </button> </Wrapper >

    );
};

getLang();