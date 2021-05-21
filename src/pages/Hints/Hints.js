import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../Main/components/Header";
import { useDispatch, useSelector } from "react-redux";
import table from "../../assets/img/table1.jpg";
import table2 from "../../assets/img/table2.jpg";
import table3 from "../../assets/img/table3.jpg";
import table3_1 from "../../assets/img/table3-1.jpg";
import table3_2 from "../../assets/img/table3-2.jpg";
import table4 from "../../assets/img/table4.jpg";
import table4_1 from "../../assets/img/table4-1.png";
import table4_2 from "../../assets/img/table4-2.png";
import table5 from "../../assets/img/table5.png";
import table5_1 from "../../assets/img/table5-1.png";
import table5_2 from "../../assets/img/table5-2.png";
import table6 from "../../assets/img/table6.png";
import table7 from "../../assets/img/table7.png";
import table8 from "../../assets/img/table8.png";
import table8_1 from "../../assets/img/table8-1.png";
import table8_2 from "../../assets/img/table8_2.png";
import table8_3 from "../../assets/img/table8-3.png";
import table9 from "../../assets/img/table9.png";

import { ButtonCustom } from "../../components/ButtonCustom";
import { MAIN_URL } from "../../constants/routes";

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: flex-start;
  padding-top: 200px;
  flex-direction: column;
`;

const H1 = styled.h1``;
const H2 = styled.h2`
  margin: 20px 0;
`;
const HeaderText = styled.p`
  margin: 20px 0;
`;

const H2Subtitle = styled.p`
  max-width: 750px;
  margin-bottom: 20px;
`;

const Bold = styled.p``;

export const Hints = ({ history }) => {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  var languageSelect = "ru";

  if (
    localStorage.getItem("language") != null &&
    localStorage.getItem("language") != ""
  ) {
    languageSelect = localStorage.getItem("language");
  }
  if (languageSelect == "ru") {
    return (
      <Wrapper>
        <H1>Описание подсказок</H1>

        <HeaderText>
          В процессе этого курса Вы узнаете всё необходимое, чтобы
          самостоятельно играть в Го.
        </HeaderText>

        <H2>Лучший ход</H2>

        <H2Subtitle>
          Данный сценарий выдаст вам оптимальный ход, исходя из ситуации на
          доске
        </H2Subtitle>

        <H2>Лучший ход соперника</H2>

        <H2Subtitle>
          Показывает лучший ход, который может совершить противник. Подсказка
          однозначно для профессиональных игроков в Го, начинающие не поймут,
          как правильно производить контратаку, опираясь на лучший ход соперника
        </H2Subtitle>

        <H2>Развитие игры на 2 хода вперед</H2>
        <H2Subtitle>
          В настоящий момент времени рассчитывает и показывает 2 лучших хода
          подряд
        </H2Subtitle>

        <H2>Плохой ход соперника</H2>

        <H2Subtitle>
          Показывает вариант плохого хода соперника. Универсальная подсказка,
          пригодится всем, кто умеет анализировать и на основе плохого хода
          соперника делать свой, лучший
        </H2Subtitle>

        <H2>Тепловая карта всей доски. Детализированная </H2>

        <H2Subtitle>
          Показывает области, подконтрольные «дыханиям» камней с разной силой –
          когда до камня 1 клетка, на тепловой карте отображается большой круг,
          по мере удаления от камня размер круга тепловой карты уменьшается.
          Детализированность тепловой карты максимальная, т.е. показывает
          удаленные максимально пересечения. Пригодится только профессиональным
          игрокам в Го
        </H2Subtitle>

        <H2>Тепловая карта всей доски. Менее детализированная </H2>

        <H2Subtitle>
          Повторяет функционал детализированной тепловой карты с меньшей
          степенью детализации
        </H2Subtitle>

        <H2>В какой четверти доски будет лучший ход соперника? </H2>

        <H2Subtitle>
          Показывает, где соперник может сделать лучший ход. Подсказка
          универсальная, для всех. Помогает выбрать четверть доски для активной
          игры.
        </H2Subtitle>

        <H2>В какой половине доски будет лучший ход соперника? </H2>

        <H2Subtitle>Тоже самое, для половины доски</H2Subtitle>

        <H2>Показать лучший из заданных 2 ходов соперника </H2>

        <H2Subtitle>
          Задаем два хода, и система показывает нам, как соперник может сходить,
          чтобы нам было очень больно. Пригодится профессиональным игрокам.
        </H2Subtitle>

        <H2>В какой четверти доски сейчас лучший ход? </H2>

        <H2Subtitle>
          Алгоритм выбирает наиболее перспективную 1⁄4 часть доски и предлагает
          ход. Универсальная.
        </H2Subtitle>

        <H2>В какой половине доски сейчас лучший ход?</H2>

        <H2Subtitle>
          Алгоритм выбирает наиболее перспективную 1/2 часть доски и предлагает
          ход. Универсальная
        </H2Subtitle>

        <H2>Тепловая карта 1-й четверти доски</H2>

        <H2Subtitle>
          Строит тепловую карту только для первой четверти доски. Подсказка для
          профессионалов.
        </H2Subtitle>

        <H2>Тепловая карта 1-й и 2-й четвертей доски</H2>

        <H2Subtitle>
          Строит тепловую карту для первой и второй четверти доски. Подсказка
          для профессионалов.
        </H2Subtitle>

        <H2>Какой перевес в очках на данный момент? </H2>

        <H2Subtitle>
          ИИ рассчитывает очки каждого игрока и выводит перевес
        </H2Subtitle>

        <H2> Кто побеждает на данный момент?</H2>

        <H2Subtitle>
          ИИ считает статистику партии на данный момент и выводит текущего
          победителя
        </H2Subtitle>
        <ButtonCustom
          width="327px"
          position="true"
          onClick={() => {
            history.push(MAIN_URL);
          }}
        >
          В меню
        </ButtonCustom>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <H1>Description of hints</H1>

        <HeaderText>
          In the course of this course, you will learn everything you need to do
          on your own play Go.
        </HeaderText>

        <H2>Best move</H2>

        <H2Subtitle>
          This scenario will give you the optimal move based on the situation on
          the board
        </H2Subtitle>

        <H2>Opponent's best move</H2>

        <H2Subtitle>
          Shows the best move that the opponent can make. Hint definitely for
          professional Go players, beginners will not understand how correctly
          make a counterattack, relying on the best move of the opponent
        </H2Subtitle>

        <H2>Game development for 2 moves ahead</H2>
        <H2Subtitle>
          Currently calculates and shows the 2 best moves in a row
        </H2Subtitle>

        <H2>Bad move of the opponent</H2>

        <H2Subtitle>
          Shows a variant of the opponent's bad move. Universal hint, it will be
          useful to anyone who knows how to analyze and on the basis of a bad
          move how to make your own, best
        </H2Subtitle>

        <H2>Heat map of the entire board. Detailed </H2>

        <H2Subtitle>
          Shows the areas controlled by the" breaths " of stones with different
          strength – when the stone is 1 cell away, a large circle is displayed
          on the heat map, according to as you move away from the stone, the
          size of the heat map circle decreases. The heat map is maximally
          detailed, i.e. it shows the most remote intersections. Useful only for
          professional users go players
        </H2Subtitle>

        <H2>Heat map of the entire board. Less detailed </H2>

        <H2Subtitle>
          Repeats the functionality of the detailed heat map to a lesser degree
          details
        </H2Subtitle>

        <H2>
          In which quarter of the board will the opponent's best move be?{" "}
        </H2>

        <H2Subtitle>
          Shows where the opponent can make the best move. Hint universal, for
          everyone. Helps you choose a quarter of the board for the active one
          games.
        </H2Subtitle>

        <H2>In which half of the board will the opponent's best move be? </H2>

        <H2Subtitle>Same for half of the board</H2Subtitle>

        <H2>Show the best of the given 2 moves of the opponent </H2>

        <H2Subtitle>
          We set two moves, and the system shows us how the opponent can go
          down, to make it really painful for us. Useful for professional
          players.
        </H2Subtitle>

        <H2>Which quarter of the board is the best move right now? </H2>

        <H2Subtitle>
          The algorithm selects the most promising 1⁄4 part of the board and
          offers motion. Universal.
        </H2Subtitle>

        <H2>Which half of the board is the best move right now?</H2>

        <H2Subtitle>
          The algorithm selects the most promising 1/2 part of the board and
          offers motion. Universal
        </H2Subtitle>

        <H2>Heat map of the 1st quarter of the board</H2>

        <H2Subtitle>
          Builds a heat map only for the first quarter of the board. A hint for
          professionals.
        </H2Subtitle>

        <H2>Heat map of the 1st and 2nd quarters of the board</H2>

        <H2Subtitle>
          Builds a heat map for the first and second quarter of the board. A
          hint for professionals.
        </H2Subtitle>

        <H2>What is the advantage in points at the moment? </H2>

        <H2Subtitle>
          The AI calculates the points of each player and outputs the advantage
        </H2Subtitle>

        <H2> Who is winning at the moment?</H2>

        <H2Subtitle>
          The AI counts the statistics of the party at the moment and outputs
          the current one the winner
        </H2Subtitle>
        <ButtonCustom
          width="327px"
          position="true"
          onClick={() => {
            history.push(MAIN_URL);
          }}
        >
          {" "}
          In the menu
        </ButtonCustom>
      </Wrapper>
    );
  }
};

export default Hints;
