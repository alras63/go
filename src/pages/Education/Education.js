import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../Main/components/Header";
import { useDispatch, useSelector } from "react-redux";
import table from '../../assets/img/table1.jpg'
import table2 from '../../assets/img/table2.jpg'
import table3 from '../../assets/img/table3.jpg'
import table3_1 from '../../assets/img/table3-1.jpg'
import table3_2 from '../../assets/img/table3-2.jpg'
import table4 from '../../assets/img/table4.jpg'
import table4_1 from '../../assets/img/table4-1.png'
import table4_2 from '../../assets/img/table4-2.png'
import table5 from '../../assets/img/table5.png'
import table5_1 from '../../assets/img/table5-1.png'
import table5_2 from '../../assets/img/table5-2.png'
import table6 from '../../assets/img/table6.png'
import table7 from '../../assets/img/table7.png'
import table8 from '../../assets/img/table8.png'
import table8_1 from '../../assets/img/table8-1.png'
import table8_2 from '../../assets/img/table8_2.png'
import table8_3 from '../../assets/img/table8-3.png'
import table9 from '../../assets/img/table9.png'

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

const H1 = styled.h1`

`;
const H2 = styled.h2`
    margin:20px 0;
`;
const HeaderText = styled.p`
margin: 20px 0;

`;

const H2Subtitle = styled.p`
max-width:750px;
`;

const Ul = styled.ul`
    margin:10px 0;
`;
const Li = styled.li`
margin: 5px 0;
    margin-left:5px;

`;
const Image = styled.img`
    max-width: 600px;
    height: auto;
    border-radius:5px;
    margin: 30px 0;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;



export const Education = ({ history }) => {

  const dispatch = useDispatch();
  const [nickname, setNickname] = useState('')
  var languageSelect = 'ru';

  if (localStorage.getItem('language') != null && localStorage.getItem('language') != '') {
      languageSelect = localStorage.getItem('language');
  }
  if(languageSelect == 'ru'){
    return (
        <Wrapper>
            <H1>Предисловие</H1>
            <HeaderText>
                Правила Го очень просты. Вы без труда их изучите в течение 5-10 минут. Однако эта простота порождает гигантское количество вариантов и дает широкое поле для творчества и фантазии, поэтому Го по праву считается самой сложной в мире игрой. Можно сказать, что здесь из элементарно простого рождается гениально сложное. И эта сложность фундаментального порядка: игра Го так же сложна, как, например, сложна математика, музыка или философия, и при этом не менее интересна, чем вышеперечисленные науки.
            </HeaderText>
            <HeaderText>В процессе этого курса Вы узнаете всё необходимое, чтобы самостоятельно играть в Го.</HeaderText>
    
    
    
            <H2>Шаг 1. Базовые правила</H2>
            <H2Subtitle>
                Для начала запомните следующие правила:
            </H2Subtitle>
            <Ul>
                <Li>Два игрока (черные и белые) ходят по очереди. Первый ход делают черные. При каждом ходе на доску выставляется один камень.</Li>
                <Li>Камень ставится на пересечение линий.</Li>
                <Li>Однажды поставленный камень никогда не передвигается!</Li>
            </Ul>
            <H2Subtitle>
                Взгляните на доску – она так и ждет пока вы сделаете свой первый ход!
            </H2Subtitle>
    
            <H2Subtitle>
            Попробуйте поставить камни в центр доски, на край доски, и в самый угол доски.
            </H2Subtitle>
    
            <Image alt="logo" src={table} />
    
            <H2Subtitle>Поздравляю, Вы уже знаете половину правил Го!</H2Subtitle>
    
            <H2>Шаг 2. Захват камней</H2>
            <H2Subtitle>
                Это простое правило. Попробуйте понять его интуитивно.
            </H2Subtitle>
    
            <H2Subtitle>
                На доске камни расставлены таким образом, что некоторые из них окружены и могут быть захвачены одним ходом. Захватите отмеченные камни по порядку: 1, 2, 3, 4.
            </H2Subtitle>
    
            <Image alt="logo" src={table2} />
    
            <H2Subtitle>
                Получилось? Двигаемся дальше!
            </H2Subtitle>
    
    
    
    
    
    
            <H2>Шаг 3. Пункты дыхания или дамэ</H2>
    
            <H2Subtitle>
                Давайте разберемся детально как, в какой момент камни захватываются.
            </H2Subtitle>
            
            <H2Subtitle>
                У каждого камня, поставленного на доску, есть пункты дыхания – это соседние пустые пункты доски, напрямую связанные с камнем линией. По-японски они называются дамэ. На диаграмме дамэ отмечены крестиками. Как вы видите, у камня в центре 4 дамэ, на краю – 3, а в углу – 2.
            </H2Subtitle>
    
            <Image alt="logo" src={table3} />
    
    
            <H2Subtitle>
                Итак, если у камня перекрыты все пункты дыхания, то он снимается с доски.
                Ход черных. Захватите камень
            </H2Subtitle>
    
            <Image alt="logo" src={table3_1} />
    
    
            <H2Subtitle>
                Ситуация, когда до захвата камня или группы камней остается один ход, называется атари.
            </H2Subtitle>
    
            <H2Subtitle>
                Однако, белые могут избежать захвата, если успеют первыми поставить камень:
            </H2Subtitle>
    
            <Image alt="logo" src={table3_2} />
    
    
            <H2Subtitle>
                Белые избежали захвата и теперь у них группа из двух камней с 3 дамэ.
            </H2Subtitle>
    
            <H2Subtitle>
                Что ж, теперь вы знаете вторую половину правил Го! Очень сложно? :)
            </H2Subtitle>
    
    
            <H2>Шаг 4. Практика захвата камней</H2>
      
            <H2Subtitle>
                Немножко потренируемся.
            </H2Subtitle>
    
            <H2Subtitle>
                Ход черных. Захватите три белых камня!
                Для этого потребуется два хода. Учтите, первый ход очень важен.
            </H2Subtitle>
    
            <Image alt="logo" src={table4} />
    
            <H2Subtitle>
                Следующая задачка. Попробуйте захватить два белых камня, находящиеся на краю доски слева.
                Сложно “убежать”, когда твои камни у самого края…
            </H2Subtitle>
    
            <Image alt="logo" src={table4_1} />
    
            <H2Subtitle>
            Как много камней! Будьте внимательны, оценивая, какие из них находятся в атари. Если ошибетесь, то Ваши камни сами станут жертвой.
            </H2Subtitle>
    
    
            <H2Subtitle>
                Ход черных.
            </H2Subtitle>
    
            <Image alt="logo" src={table4_2} />
    
            <H2Subtitle>
                Для полноты картины нам остается изучить некоторые нюансы, которые часто называют правилами, но это скорее следствия из вышеописанных правил, а не самостоятельные правила.
            </H2Subtitle>
    
    
            <H2>Шаг 5. Самоубийство запрещено!</H2>
    
            <H2Subtitle>
                В Го практически нет ограничений. Вы можете поставить камень на любой свободный пункт доски. Также в любой момент Вы можете пропустить ход (сказать “пас”). Но всё-таки есть два совершенно логичных и естественных запрета. И первое, это запрет на самоубийство.
            </H2Subtitle>
    
            <Image alt="logo" src={table5} />
    
    
    
            <H2Subtitle>
               Черным нельзя ходить в пункт А. Если черные сыграют в A, то окажется, что их камень уже окружен и не имеет пунктов дыхания (дамэ). Это самоубийство, и самоубийство в Го запрещено. Компьютер не даст поставить Вам камень в пункт А.
            </H2Subtitle>
    
            <H2Subtitle>
                Однако, если во время “самоубийственного” хода захватываются камни противника, то такой ход разрешен.
                Сделайте ход в А и захватите два камня.
            </H2Subtitle>
    
            <Image alt="logo" src={table5_1} />
    
            <H2Subtitle>
                Из этого правила следует, что можно построить группу камней, которую не получится захватить даже при полном окружении. Такая группа должна содержать, как минимум, два пункта, в которые противнику было бы запрещено поставить камень. Ее называют двуглазой крепостью.
            </H2Subtitle>
    
    
            <H2Subtitle>
                Примеры групп камней, которые нельзя захватить, расставлены на доске ниже. Обратите внимание, что группы 1 и 2 не соединены между собой, но при этом образуют живую двуглазую группу. Группа 3 также является “неубиваемой”.
            </H2Subtitle>
    
    
            <H2Subtitle>
                Взгляните на группу 4. Куда нужно черному поставить камень, чтобы избежать гибели своих камней?
            </H2Subtitle>
    
            <Image alt="logo" src={table5_2} />
    
            <H2Subtitle>
                Если Вам не до конца понятно, то экспериментируйте с позицией на доске, чтобы не оставалось вопросов.
            </H2Subtitle>
    
    
    
    
            <H2>Шаг 6. Правило ко</H2>
    
            <H2Subtitle>
                Второе и последнее ограничение в Го – правило ко. Оно так же абсолютно логично, и необходимость в нем совершенно естественна, как и запрет на самоубийство. Правило ко гласит, что нельзя повторять позицию предыдущего хода.
            </H2Subtitle>
    
            <H2Subtitle>
                Рассмотрим следующую элементарную ситуацию, которая с большой вероятностью может встретиться у вас в партии. Ход черных. Захватите белый камень ходом в А.
            </H2Subtitle>
    
            <Image alt="logo" src={table6} />
    
            <H2Subtitle>
                Теперь ход белых, но компьютер не разрешит сейчас захватить черный камень обратно, потому что повторится позиция предыдущего хода. Если бы этого ограничения не было, то возникло бы зацикливание – черные и белые постоянно захватывали бы один “несчастный” камень и партия никогда не кончилась. Поэтому в такой ситуации захватить обратно камень можно только через ход. Постарайтесь самостоятельно понять, как это правило работает, экспериментируя с позицией на доске.
            </H2Subtitle>
    
    
            <H2Subtitle>
                Здесь нет ничего сложного, однако правило ко может приводить к очень непростым и неординарным ситуациям, но об этом позже…
            </H2Subtitle>
    
            <H2Subtitle>
                Ну, что же, теперь переходим к самому главному!
            </H2Subtitle>
    
    
            <H2>Шаг 7. Цель игры</H2>
    
            <H2Subtitle>
                Итак, мы изучили все правила Го и по сути их три:
            </H2Subtitle>
            <Ul>
                <Li>1. Правило очередности.</Li>
                <Li>2. Правило захвата камней.</Li>
                <Li>3. Запрещенные ходы (запрет на самоубийство и правило ко).</Li>
            </Ul>
    
            <H2Subtitle>
                В известных нам настольных играх (шашках, шахматах) главная цель – это захват фишек или фигур. Однако в Го это не так. В Го можно одержать победу, не захватив ни одного камня. Это связано с тем, что кроме захвата камней в Го можно (и нужно!) захватывать территорию. Давайте разберемся что это такое.
            </H2Subtitle>
    
            <H2Subtitle>
                На диаграмме ниже территория черных и белых отмечена черными и белыми квадратиками соответственно. В данном случае Черные захватили 11 очков территории, а Белые – 18 (пересчитайте, пожалуйста). Остальная часть доски еще не поделена и там будет продолжаться борьба.
            </H2Subtitle>
    
            <Image alt="logo" src={table7} />
    
            <H2Subtitle>
                Попробуем дать определение. Территория – это свободные пункты доски, которые оцеплены камнями одного цвета так, чтобы не допустить вторжения со стороны противника.
            </H2Subtitle>
            
            <H2Subtitle>
            Справедливости ради нужно заметить, что понятие территории несколько абстрактное, и объяснить его словами так, чтобы сразу было всё понятно, практически невозможно. Поэтому не пугайтесь, если вам не всё ясно. В любом случае теорию надо закрепить на практике. Но надеюсь, что какое-то понимание уже есть.
            </H2Subtitle>
            
            <H2Subtitle>
                Цель игры – захватить как можно больше территории и как можно больше камней противника. Каждый захваченный камень противника приносит одно очко + каждый свободный пункт доски, окруженный своими камнями, также приносит одно очко. В конце партии очки подсчитываются и определяется победитель. Выиграл тот, у кого больше очков.
            </H2Subtitle>
            
            <H2Subtitle>
                Из-за того, что в Го существует два способа “зарабатывания” очков, то во время игры приходится постоянно оценивать позицию и выбирать ход, который принес бы максимальную выгоду – это может быть и захват территории, и захват камней противника. Но чаще всего выгоднее захватывать территорию.
            </H2Subtitle>
    
            
            <H2>Шаг 8. Примеры партий</H2>
    
            <H2Subtitle>
                Закрепим новые знания на примерах. Посмотрите следующую партию. (Используйте клавиши навигации, расположенные внизу доски).
            </H2Subtitle>
    
            <Image alt="logo" src={table8} />
    
            <H2Subtitle>
                Партия закончилась, когда доска была полностью поделена и не осталось ни одного хода, который приносил бы выгоду, то есть либо увеличивал свою территорию, либо уменьшал территорию противника, либо захватывал камни противника. В конечной позиции следующий ход будет совершен или на свою территорию, тем самым отнимая у себя же очки, или на территорию противника, делая “подарок” противнику. Когда некуда ходить, обычно пропускают ход (говорят “пас”). После двух пасов начинается подсчет очков.
            </H2Subtitle>
    
    
            <H2Subtitle>
                В данной партии черные не захватили ни одного камня, но окружили 28 очков территории; белые – захватили 1 камень и окружили 26 очков территории, суммарно 27 очков. В результате выиграли черные, набрав на 1 очко больше.
            </H2Subtitle>
            
            <Image alt="logo" src={table8_1} />
    
            <H2Subtitle>
                Теперь рассмотрим более сложный пример.
            </H2Subtitle>
    
            <Image alt="logo" src={table8_2} />
    
            <H2Subtitle>
                Здесь уже больше борьбы. Заметьте, что не все камни были захвачены и сняты с доски во время игры. Когда видно, что камни в любом случае будут захвачены, то их не нужно “доедать”, потому что в процессе “доедания” придется ставить камни на собственную территорию, отнимая у себя же очки. Такие камни называются пленными камнями. При подсчете очков пленные камни снимаются с доски и тоже учитываются наравне с захваченными камнями.
            </H2Subtitle>   
    
            <H2Subtitle>
                В результате этой партии у черных – 3 пленных камня и 21 очко территории, всего – 24 очка; у белых – 1 захваченный камень, 3 пленных камня и 12 очков территории, всего – 16 очков. Снова выиграли черные, но с перевесом в 8 очков.
            </H2Subtitle>
    
            <Image alt="logo" src={table8_3} />
    
            <H2Subtitle>
            Примечание. Из-за того, что черные ходят первые, то у них изначально есть небольшое преимущество. И чтобы уровнять начальные условия игроков, в прошлом веке было введено правило коми, согласно которому белые получают коми, то есть дополнительные 6.5 очков. И если учесть коми, то в последней партии черные выиграли не 8 очков, а только 1.5 очка.
            </H2Subtitle>
    
            <H2>Шаг 9. Настоящее Го</H2>
    
            <H2Subtitle>
                До этого момента мы рассматривали задачи и партии на доске размера 9х9. Такая доска используются только в обучении. На самом деле в Го играют на доске 19х19. В общем случае доска для Го может быть совершенно любого размера и формы (см. приложение FreedGo в разделе “Обзор приложений”). Теоретически Го может быть даже трехмерным (когда играть нужно не на площадь, а на объем), но традиционно для игры в Го используется доска размера 19х19. Именно здесь начинается настоящее Го.
            </H2Subtitle>
    
    
            <H2Subtitle>
            Играя на доске такого размера, человеческий разум используется в полной мере – приходится мыслить образно, строя планы на захват территории, приходится просчитывать ходы вперед, когда сталкиваются черные и белые камни, и при этом нужно следить за всей доской целиком, не упуская ни одного большого хода. Это очень непросто, но чрезвычайно интересно и захватывающе! Неслучайно Го является не только самой сложной в мире игрой, но и самой популярной.
            </H2Subtitle>
    
            
            <H2Subtitle>
            Посмотрите партию двух профессионалов и попытайтесь уловить общий ход игры. Это самая короткая партия в истории Го (142 хода)!
            </H2Subtitle>
    
            <Image alt="logo" src={table9} />
    
            <H2Subtitle>
                Партия получилась короткой из-за того, что оба игрока огородили и сохранили огромные участки доски. После подсчёта оказалось, что у чёрных 128 очков, а у белых 129. Заметим, что 7 чёрных камней в верхнем правом углу не имеют шансов построить два глаза и выжить, так что при подсчёте они будут сняты с доски.
            </H2Subtitle>
    
            <H2>Шаг 10. Что дальше?</H2>
    
            <H2Subtitle>
                Теперь, когда Вы знаете правила, перед Вами открывается безграничный и многогранный мир Го. Вам предстоит изучить основные технические и стратегические приемы, открыть великих мастеров игры, создать собственный неповторимый стиль и сыграть много-много интересных и захватывающих партий! Как же я Вам завидую!..
            </H2Subtitle>
    
            <H2Subtitle>
            Если Вас увлекла эта игра и хотите двигаться дальше, то могу порекомендовать следующее:
            </H2Subtitle>
    
            <H2Subtitle>
            1. Попробуйте сыграть несколько партий с компьютером на доске 9х9 или 13х13 (онлайн или в приложении), чтобы закрепить полученные навыки. Однако слишком много с компьютером не играйте, а постарайтесь как можно скорее поиграть на онлайн сервере – наблюдайте за партиями, играйте с людьми (см. список рекомендуемых серверов).
            2. Найдите своего учителя. Конечно, Го можно изучать самостоятельно, но с опытным наставником гораздо интереснее и продуктивнее. Возможно, что Вам подойдет кто-то из мастеров нашего клуба.
    
            3. Если еще не видели, то обязательно посмотрите аниме “Хикару и Го”. Это очень хороший мультик. Очень.
    
            4. Изучайте Го на телефоне, решайте задачи (см. обзор приложений).
    
            5. Найдите и присоединитесь к сообществу игроков Го в своем городе. Если его нет, то найдите единомышленников создайте сами! Вы всегда можете обратиться к нам за помощью.
    
            6. Участвуйте в соревнованиях по Го, которые организует Российская федерация Го.
    
            Успехов! Надеюсь, что встретимся с вами на турнире!
    
    
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
<H1>Preface </H1>
<HeaderText>
The rules of Go are very simple. You can easily learn them within 5-10 minutes. However, this simplicity generates a huge number of options and gives a wide field for creativity and imagination, so Go is rightfully considered the most difficult game in the world. We can say that here, from the elementary simple, the ingeniously complex is born. And this complexity is of a fundamental order: the game of Go is as complex as, for example, mathematics, music or philosophy, and at the same time no less interesting than the above sciences.
</HeaderText>
<HeaderText>During this course, you will learn everything you need to play Go on your own.</HeaderText>



<H2>Step 1. Basic Rules</H2>
<H2Subtitle>
First, remember the following rules:
</H2Subtitle>
<Ul>
<Li>Two players (black and white) take turns. Black makes the first move. At each turn, one stone is placed on the board.</Li>
<Li>The stone is placed at the intersection of the lines.</Li>
<Li>Once placed, the stone never moves!</Li>
</Ul>
<H2Subtitle>
Take a look at the board – it's just waiting for you to make your first move!
</H2Subtitle>

<H2Subtitle>
Try to place the stones in the center of the board, on the edge of the board, and in the very corner of the board.
</H2Subtitle>

<Image alt="logo" src={table} />

<H2Subtitle>Congratulations, you already know half the rules of Go!</H2Subtitle>

< H2>Step 2. Capture the stones</H2>
<H2Subtitle>
This is a simple rule. Try to understand it intuitively.
</H2Subtitle>

<H2Subtitle>
On the board, the stones are arranged in such a way that some of them are surrounded and can be captured in one move. Grab the marked stones in order: 1, 2, 3, 4.
</H2Subtitle>

<Image alt="logo" src={table2} />

<H2Subtitle>
Did it work? Moving on!
</H2Subtitle>






< H2>Step 3. Breathing points or dme </H2>

<H2Subtitle>
Let's understand in detail how, at what point the stones are captured.
</H2Subtitle>

<H2Subtitle>
Each stone placed on the board has breathing points – these are adjacent empty points on the board that are directly connected to the stone by a line. In Japanese, they are called dame. On the diagram, the dames are marked with crosses. As you can see, the stone has 4 dames in the center, 3 on the edge, and 2 in the corner.
</H2Subtitle>

<Image alt="logo" src={table3} />


<H2Subtitle>
So, if the stone has all the points of respiration blocked, then it is removed from the board.
Black's move. Grab the stone
</H2Subtitle>

<Image alt="logo" src={table3_1} />


<H2Subtitle>
A situation where there is only one move left before capturing a stone or group of stones is called an atari.
</H2Subtitle>

<H2Subtitle>
However, white can avoid capture if they manage to put the stone first:
</H2Subtitle>

<Image alt="logo" src={table3_2} />


<H2Subtitle>
White escaped capture and now they have a group of two stones with 3 dames.
</H2Subtitle>

<H2Subtitle>
Well, now you know the second half of the rules of Go! Very difficult? :)
</H2Subtitle>


< H2>Step 4. Practice grabbing stones</H2>

<H2Subtitle>
Let's practice a little.
</H2Subtitle>

<H2Subtitle>
Black's move. Capture the three white stones!
This will require two moves. Please note that the first move is very important.
</H2Subtitle>

<Image alt="logo" src={table4} />

<H2Subtitle>
Next task. Try to grab the two white stones that are on the edge of the board on the left.
It is difficult to " escape” when your stones are at the very edge…
</H2Subtitle>

<Image alt="logo" src={table4_1} />

<H2Subtitle>
So many stones! Be careful when evaluating which ones are in atari. If you make a mistake, then your stones themselves will become a victim.
</H2Subtitle>


<H2Subtitle>
Black's move.
</H2Subtitle>

<Image alt="logo" src={table4_2} />

<H2Subtitle>
To complete the picture, we need to study some of the nuances that are often called rules, but these are rather consequences of the rules described above, rather than independent rules.
</H2Subtitle>
    
< H2>Step 5. Suicide is forbidden!</H2>
    
    <H2Subtitle>
        There are practically no restrictions in Go. You can put a stone on any free point of the board. You can also skip a move (say “pass") at any time. But still, there are two completely logical and natural prohibitions. And the first is the ban on suicide.
    </H2Subtitle>

    <Image alt="logo" src={table5} />



    <H2Subtitle>
       Black people can't go to point A. If Black plays A, it turns out that their stone is already surrounded and has no points of respiration (dame). This is suicide, and suicide is forbidden in Go. The computer will not let you put the stone in point A.
    </H2Subtitle>

    <H2Subtitle>
        However, if the opponent's stones are captured during the "suicide" move, then such a move is allowed.
        Make a move in A and grab two stones.
    </H2Subtitle>

    <Image alt="logo" src={table5_1} />

    <H2Subtitle>
        It follows from this rule that you can build a group of stones that you can not capture even with a full environment. Such a group must contain at least two points in which the opponent would be forbidden to put a stone. It is called the two-eyed fortress.
    </H2Subtitle>


    <H2Subtitle>
        Examples of groups of stones that cannot be captured are placed on the board below. Note that groups 1 and 2 are not connected to each other, but they form a living two-eyed group. Group 3 is also "unkillable".
    </H2Subtitle>


    <H2Subtitle>
        Take a look at group 4. Where should black put the stone to avoid the destruction of his stones?
    </H2Subtitle>

    <Image alt="logo" src={table5_2} />

    <H2Subtitle>
        If you do not fully understand, then experiment with the position on the board, so that there are no questions left.
    </H2Subtitle>




    < H2>Step 6. Ko Rule</H2>

    <H2Subtitle>
        The second and last restriction in Go is the ko rule. It is just as absolutely logical, and the need for it is quite natural, as the ban on suicide. The ko rule states that you cannot repeat the position of the previous move.
    </H2Subtitle>

    <H2Subtitle>
        Consider the following elementary situation, which is very likely to occur in your party. Black's move. Capture the white stone with a move in A.
    </H2Subtitle>

    <Image alt="logo" src={table6} />

    <H2Subtitle>
        Now it is white's turn, but the computer will not allow you to grab the black stone back now, because the position of the previous move will be repeated. If this restriction did not exist, then there would be a loop – black and white would constantly capture one "unfortunate" stone and the game would never end. Therefore, in such a situation, you can only capture the stone back through the move. Try to understand for yourself how this rule works by experimenting with the position on the board.
    </H2Subtitle>


    <H2Subtitle>
        There is nothing complicated here, but the ko rule can lead to very difficult and unusual situations, but more on that later…
    </H2Subtitle>

    <H2Subtitle>
        Well, now we move on to the most important thing!
    </H2Subtitle>


    < H2>Step 7. Goal of the game</H2>

    <H2Subtitle>
        So, we have studied all the rules of Go and in fact there are three of them:
    </H2Subtitle>
    <Ul>
        <Li>1. The priority rule.</Li>
        <Li>2. The rule of capturing stones.</Li>
        <Li>3. Forbidden moves (suicide ban and ko rule).</Li>
    </Ul>

    <H2Subtitle>
        In the board games known to us (checkers, chess), the main goal is to capture chips or pieces. However, this is not the case in Go. In Go, you can win without capturing a single stone. This is due to the fact that in addition to capturing stones in Go, you can (and should!) seize territory. Let's figure out what it is.
    </H2Subtitle>

    <H2Subtitle>
        In the diagram below, the territory of black and white is marked with black and white squares, respectively. In this case, Black captured 11 points of territory, and White – 18 (please recalculate). The rest of the board is not yet divided and the fight will continue there.
    </H2Subtitle>

    <Image alt="logo" src={table7} />

    <H2Subtitle>
        Let's try to define it. The territory is the free points of the board, which are surrounded by stones of the same color so as to prevent an invasion from the enemy.
    </H2Subtitle>
    
    <H2Subtitle>
    In fairness, it should be noted that the concept of territory is somewhat abstract, and it is almost impossible to explain it in words so that everything is immediately clear. So don't be alarmed if you don't understand everything. In any case, the theory must be consolidated in practice. But I hope that some understanding is already there.
    </H2Subtitle>
    
    <H2Subtitle>
        The goal of the game is to capture as much territory as possible and as many enemy stones as possible. Each captured opponent's stone earns one point + each free board point surrounded by its own stones also earns one point. At the end of the game, the points are counted and the winner is determined. The winner is the one with the most points.
    </H2Subtitle>
    
    <H2Subtitle>
        Due to the fact that there are two ways to “earn” points in Go, during the game you have to constantly evaluate the position and choose the move that would bring the maximum benefit – this can be both the capture of territory and the capture of enemy stones. But most often it is more profitable to capture the territory.
    </H2Subtitle>

    
    < H2>Step 8. Sample batches</H2>

    <H2Subtitle>
        Let's consolidate the new knowledge with examples. Watch the next batch. (Use the navigation keys located at the bottom of the board).
    </H2Subtitle>

    <Image alt="logo" src={table8} />

    <H2Subtitle>
        The game ended when the board was completely divided and there was not a single move left that would benefit, that is, either increase your territory, reduce the enemy's territory, or capture the enemy's stones. In the final position, the next move will be made either to your own territory, thereby taking away your own points, or to the enemy's territory, making a "gift" to the enemy. When there is nowhere to go, they usually miss a move (they say "pass"). After two passes, the scoring begins.
    </H2Subtitle>


    <H2Subtitle>
        In this game, black did not capture a single stone, but surrounded 28 points of territory; white-captured 1 stone and surrounded 26 points of territory, for a total of 27 points. As a result, Black won, gaining 1 point more.
    </H2Subtitle>
    
    <Image alt="logo" src={table8_1} />

    <H2Subtitle>
        Now let's look at a more complex example.
    </H2Subtitle>

    <Image alt="logo" src={table8_2} />

    <H2Subtitle>
        There's already more fighting going on here. Note that not all the stones were captured and removed from the board during the game. When you see that the stones will be captured in any case, then you do not need to “finish” them, because in the process of “finishing” you will have to put the stones on your own territory, taking away your own points. Such stones are called captive stones. When scoring points, the captured stones are removed from the board and are also counted on a par with the captured stones.
    </H2Subtitle>   

    <H2Subtitle>
        As a result of this game, black has 3 captured stones and 21 points of territory, a total of 24 points; white has 1 captured stone, 3 captured stones and 12 points of territory, a total of 16 points. Black won again, but with a margin of 8 points.
    </H2Subtitle>

    <Image alt="logo" src={table8_3} />

    <H2Subtitle>
    Note. Due to the fact that black moves first, they initially have a slight advantage. And to level the initial conditions of the players, in the last century, the Komi rule was introduced, according to which white gets komi, that is, an additional 6.5 points. And if we take into account Komi, then in the last game Black won not 8 points, but only 1.5 points.
    </H2Subtitle>

    < H2>Step 9. Present Go</H2>
    <H2Subtitle>
                Up to this point, we have been looking at problems and games on a 9x9 board. This board is used only in training. In fact, Go is played on a 19x19 board. In general, a Go board can be of absolutely any size and shape (see the FreedGo app in the App Overview section). Theoretically, Go can even be three-dimensional (when you need to play not on the area, but on the volume), but traditionally a 19x19 board is used for playing Go. This is where the real Go begins.
            </H2Subtitle>
    
    
            <H2Subtitle>
            Playing on a board of this size, the human mind is used to the fullest – you have to think figuratively, making plans to capture territory, you have to calculate the moves forward when black and white stones collide, and at the same time you need to monitor the entire board as a whole, not missing a single big move. It is very difficult, but extremely interesting and exciting! It is no coincidence that Go is not only the most difficult game in the world, but also the most popular.
            </H2Subtitle>
    
            
            <H2Subtitle>
            Watch the game of two professionals and try to catch the general course of the game. This is the shortest game in the history of Go (142 moves)!
            </H2Subtitle>
    
            <Image alt="logo" src={table9} />
    
            <H2Subtitle>
                The game turned out to be short due to the fact that both players fenced and saved huge areas of the board. After counting, it turned out that black has 128 points, and white has 129. Note that the 7 black stones in the upper right corner have no chance to build two eyes and survive, so they will be removed from the board when counted.
            </H2Subtitle>
    
            <H2>Step 10. What's next?</H2>
    
            <H2Subtitle>
                Now that you know the rules, the boundless and multi-faceted world of Go opens up before you. You will learn the main technical and strategic techniques, discover the great masters of the game, create your own unique style and play many, many interesting and exciting games! How I envy you!..
            </H2Subtitle>
    
            <H2Subtitle>
            If you are interested in this game and want to move on, I can recommend the following:
            </H2Subtitle>
    
            <H2Subtitle>
            1. Try playing several games with the computer on a 9x9 or 13x13 board (online or in the app) to consolidate your skills. However, do not play too much with the computer, but try to play on the online server as soon as possible – watch the games, play with people (see the list of recommended servers).
            2. Find your teacher. Of course, Go can be studied independently, but with an experienced mentor it is much more interesting and productive. It is possible that one of the masters of our club will suit you.
    
            3. If you haven't seen it yet, then be sure to watch the anime “Hikaru and Go”. This is a very good cartoon. Very.
    
            4. Learn Go on your phone, solve problems (see the app overview).
    
            5. Find and join the community of Go players in your city. If you don't have one, then find like-minded people and create one yourself! You can always contact us for help.
    
            6. Participate in Go competitions organized by the Russian Go Federation.
    
            Good luck! I hope that we will meet you at the tournament!
    
    
            </H2Subtitle>
            <ButtonCustom
            width="327px"
            position="true"
            onClick={() => {
              history.push(MAIN_URL);
            }}
          > In
the menu
          </ButtonCustom>
            </Wrapper>
      );
  }
  
};

export default Education;
