import { all, takeLatest, call, put } from "redux-saga/effects";
import { getToken } from "../../helpers/session";
import {
  SINGLE_HELP,
  GET_HINT_BEST_MOVES,
  GET_HINT_FUTURED,
  GET_HINT_BEST_MOVES_WAR,
  GET_HINT_SHOW_BEST,
  GET_HINT_HEATMAP_FULL,
  MAP_HELP,
  GET_HINT_HEATMAP_ZONE,
  GET_HINT_HEATMAP_ZONE_ONE,
  SCORES_WINNER,
  GET_SCORES_WINNER,
  GET_HINT_CAPTURING,
} from "./types";
import {
  helpBestMoves,
  helpFutured,
  helpBestMovesWar,
  helpShowBest,
  helpShowBestEnemy,
  helpHeatmapFull,
  helpHeatmapZone,
  helpHeatmapZoneOne,
  scoresWinner,
  helpHeatmapZoneQuerterTwo,
  scoresSuperiority,
} from "../../api/board";

import {
  SET_BLOCKED,
} from "./types";

import {
  setBlocked
} from "../../store/Board/actions";

function* fetchGetHintBestMoves_saga(action) {
  const { payload } = action;
  try {
    const res = yield call(helpBestMoves, getToken(), payload.game_id, payload.count);
    if (res.hint) {
      let newObj = {};
      res.hint.forEach((key, i) => {
        newObj[key.move] = i+1
      })
      yield put({ type: SINGLE_HELP, payload: newObj})
    }
  } catch (e) {
    //throw e;
  }
}

function* fetchGetCpturing_saga(action) {
  const { payload } = action;
  try {
    const res = yield call(helpBestMoves, getToken(), payload.game_id, payload.count);
    if (res.hint) {
      let newObj = {};
      res.hint.forEach((key, i) => {
        newObj[key.move] = i+1
      })
      yield put({ type: SINGLE_HELP, payload: newObj})
    }
  } catch (e) {
    //throw e;
  }
}

function* fetchGetHintFutured_saga(action) {
  const { payload } = action;
  try {
    const res = yield call(helpFutured, getToken(), payload.game_id, payload.count);
    if (res.hint) {
      let newObj = {};
      res.hint.forEach((key, i) => {
        newObj[key.move] = i+1
      })
      yield put({ type: SINGLE_HELP, payload: newObj})
    }
  } catch (e) {
    //throw e;
  }
}

function* fetchGetHintBestMovesWar_saga(action) {
  const { payload } = action;
  try {
    const res = yield call(helpBestMovesWar, getToken(), payload.game_id, payload.count);
    if (res.hint) {
      let newObj = {};
      res.hint.forEach((key, i) => {
        newObj[key.move] = i+1
      })
      yield put({ type: SINGLE_HELP, payload: newObj})
    }
  } catch (e) {
    //throw e;
  }
}

function* fetchGetHintShowBest_saga(action) {
  const { payload } = action;
  try {
    const res = yield call(helpShowBest, getToken(), payload.game_id, payload.moves);
    if (res.hint) {
      const newObj = {}
      newObj[res.hint] = 'circle'
      yield put({ type: SINGLE_HELP, payload: newObj})
    }
  } catch (e) {
    //throw e;
  }
}

function* fetchGetHintHeatmapFull_saga(action) {
  const { payload } = action;
  try {
    const res = yield call(helpHeatmapFull, getToken(), payload.game_id);
    if (res.hint) {
      yield put({ type: MAP_HELP, payload: res.hint})
    }
  } catch (e) {
    //throw e;
  }
}

export function* fetchGetHintHeatmapZone_saga(action) {
  const { payload } = action;
  try {
    if(payload.typeHint === 'superiority'){
      
      var superioty = yield call(scoresSuperiority, getToken(), payload.game_id);
      console.log(superioty);
      if(superioty.hint.score > 40){
        alert("Перевес очков и ситуация на доске не самая лучшая и продолжать играть не сильно имеет смысл");
      } else {
        alert("Продолжайте играть");
      }
      yield put({ type: SET_BLOCKED, payload: false})
      return;
    }
    const res = yield call(helpHeatmapZone, getToken(), payload.game_id, payload.isQuarter);
    if (res.hint) {
      if(payload.typeHint !== undefined){

        if(payload.typeHint === 'customHintProtection'){
          var superQuerter = yield call(helpHeatmapZone, getToken(), payload.game_id, 1);

          var column = {
          };
          var line = [];
          if(superQuerter.hint == 1 || superQuerter.hint == 4){
            column = [
              "G",
              "H",
              "J",
              "K",
              "L",
              "M",
              "N",
            ];
          } else {
            column = [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
            ];
          }

          if(superQuerter.hint == 1 || superQuerter.hint == 2){
            line = [
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
            ];
          } else {
            line = [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
            ];
          }

       console.log(column.length);
       console.log(line.length);
       var arr = [];

       for(var i = 0; i<column.length; i++){
         for(var e = 0; e<line.length; e++){
           console.log(e+" => "+column[i]+line[e]);
           arr.push(column[i]+line[e]);
         }
       }

       const res = yield call(helpShowBestEnemy, getToken(), payload.game_id, arr);
        if (res.hint) {
          const newObj = {}
          newObj[res.hint] = 'circle'
          yield put({ type: SINGLE_HELP, payload: newObj})
        }

       console.log(arr);
        }
        if(payload.typeHint === 'customHintAttackTwoQuerters'){
          var superQuerter = yield call(helpHeatmapZone, getToken(), payload.game_id, 1);
          
          var querters = [
            "1,2",
            "1,4",
            "2,3",
            "3,4"
          ];

          if(superQuerter.hint == 1){
            querters = [
              "1,2",
              "1,4",
            ];
          } else if(superQuerter.hint == 2){
            querters = [
              "1,2",
              "2,3",
            ];
          } else if(superQuerter.hint == 3){
            querters = [
              "3,2",
              "3,4",
            ];
          } else if(superQuerter.hint == 4){
            querters = [
              "4,1",
              "3,4",
            ];
          }
          
          var IndexQuarter = Math.round(Math.random()*1);
          
          var mapHealt = '';
          mapHealt = yield call(helpHeatmapZoneQuerterTwo, getToken(), payload.game_id, querters[IndexQuarter]);

          var arr = {
            0 : "A",
            1 : "B",
            2 : "C",
            3 : "D",
            4 : "E",
            5 : "F",
            6 : "G",
            7 : "H",
            8 : "J",
            9 : "K",
            10 : "L",
            11 : "M",
            12 : "N",
          };
          var price = [];
          
          var cell = {};

          for(var column = 0; column < mapHealt.hint.length; column++){
            for(var row = 0; row <mapHealt.hint[column].length; row++){

              var rowApply = row + 1;

              price[arr[column] + rowApply] = '';
              price[arr[column] + rowApply] = mapHealt.hint[column][row];
            }
          } 

          var keys = []; for(var key in price) keys.push(key);
          keys.sort(function(a,b){return price[b]-price[a]});

          console.log(price);
          console.log(keys);
          
          let newObj = {};
          
          newObj[keys[0]] = 1;
          newObj[keys[1]] = 2;
          newObj[keys[2]] = 3;
          newObj[keys[3]] = 4;
          console.log(newObj);
          yield put({ type: SINGLE_HELP, payload: newObj})
          

        }
        if(payload.typeHint === "customHintCapture"){
          var mapHealt = '';
          if(res.hint == 1){
            mapHealt = yield call(helpHeatmapZoneQuerterTwo, getToken(), payload.game_id, '1,2');
          } else {
            mapHealt = yield call(helpHeatmapZoneQuerterTwo, getToken(), payload.game_id, '3,4');
          }

          var arr = {
            0 : "A",
            1 : "B",
            2 : "C",
            3 : "D",
            4 : "E",
            5 : "F",
            6 : "G",
            7 : "H",
            8 : "J",
            9 : "K",
            10 : "L",
            11 : "M",
            12 : "N",
          };
          var price = [];
          
          var cell = {};

          for(var column = 0; column < mapHealt.hint.length; column++){
            for(var row = 0; row <mapHealt.hint[column].length; row++){

              var rowApply = row + 1;

              price[arr[column] + rowApply] = '';
              price[arr[column] + rowApply] = mapHealt.hint[column][row];
            }
          } 

          var keys = []; for(var key in price) keys.push(key);
          keys.sort(function(a,b){return price[b]-price[a]});

          console.log(price);
          console.log(keys);
          
          let newObj = {};
          
          newObj[keys[0]] = 1;
          newObj[keys[1]] = 2;
          newObj[keys[2]] = 3;
          newObj[keys[3]] = 4;
          console.log(newObj);
          yield put({ type: SINGLE_HELP, payload: newObj})
          
          //yield put({ type: MAP_HELP, payload: mapHealt.hint})
        }

      } else {
        yield put({ type: MAP_HELP, payload: { zone: res.hint, isQuarter: payload.isQuarter}})
      }
    }
  } catch (e) {
    //throw e;
  }
}
function* fetchGetHintHeatmapZoneOne_saga(action) {
  const { payload } = action;
  try {
    const res = yield call(helpHeatmapZoneOne, getToken(), payload.game_id, payload.isQuarter);
    if (res.hint) {
      yield put({ type: MAP_HELP, payload: res.hint})
    }
  } catch (e) {
    //throw e;
  }
}

function* fetchGetHintScoresWinner_saga(action) {
  const { payload } = action;
  try {
    const res = yield call(scoresWinner, getToken(), payload.game_id);
    if (res.hint) {
      yield put({ type: SCORES_WINNER, payload: res.hint})
    }
  } catch (e) {
    //throw e;
  }
}

export function* boardSaga() {
  yield all([
    takeLatest(GET_HINT_CAPTURING, fetchGetCpturing_saga),
    takeLatest(GET_HINT_FUTURED, fetchGetHintFutured_saga),
    takeLatest(GET_HINT_BEST_MOVES, fetchGetHintBestMoves_saga),
    takeLatest(GET_HINT_BEST_MOVES_WAR, fetchGetHintBestMovesWar_saga),
    takeLatest(GET_HINT_SHOW_BEST, fetchGetHintShowBest_saga),
    takeLatest(GET_HINT_HEATMAP_FULL, fetchGetHintHeatmapFull_saga),
    takeLatest(GET_HINT_HEATMAP_ZONE, fetchGetHintHeatmapZone_saga),
    takeLatest(GET_HINT_HEATMAP_ZONE_ONE, fetchGetHintHeatmapZoneOne_saga),
    takeLatest(GET_SCORES_WINNER, fetchGetHintScoresWinner_saga),
  ]);
}
