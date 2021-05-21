let figures = [];
let dihanie = [];
let dihanieFinish = [];


var testCordsForDih = {};

export const viewDih = function(stonePosition, coordinates, yourColor){
    figures = [];
    dihanie = [];
    dihanieFinish = [];
    
    testCordsForDih = {};
    for (const key in coordinates) {
      testCordsForDih[key] = coordinates[key];
  
    }
  
    if(stonePosition != false){
      testCordsForDih[stonePosition] = yourColor;
    }
  
    for (const key in testCordsForDih) {
        if(testCordsForDih[key] == yourColor){
          checkStone(key,yourColor);
        }
    }
  
    console.log(figures);
    for(var i= 0; i< dihanieFinish.length; i++){
      console.log(dihanieFinish[i]);
      
      if(dihanieFinish[i].length < 2){
        for(var kam=0; kam < figures[i].length; kam++){
          var elements = document.getElementsByClassName(figures[i][kam]);
          for (var index = 0; index < elements.length; ++index) {
            elements[index].setAttribute('r', 13);
          }
        }
      } else {
        for(var kam=0; kam < figures[i].length; kam++){
          var elements = document.getElementsByClassName(figures[i][kam]);
          for (var index = 0; index < elements.length; ++index) {
            elements[index].setAttribute('r', 19);
          }
        }
      }
    }
  }
  const checkStone = function(stone, yourColor){
            var numberfigure = checkStoneOnFigures(stone);
            if( numberfigure === false){
                    //alert(stone);
                    figures.push([stone]);
            }
            var sosedi = getSosediForDih(stone,yourColor);
                    
            for(var sos = 0; sos < sosedi.length; sos++){
              numberfigure = checkStoneOnFigures(stone);
              if(checkStoneOnFigures(sosedi[sos]) === false){
                if(testCordsForDih[sosedi[sos]] === undefined){
                  if(dihanie[numberfigure] == undefined){
                    dihanie[numberfigure] = [];
                  }
                  if(dihanieFinish[numberfigure] == undefined){
                    dihanieFinish[numberfigure] = [];
                  }
                  if(dihanie[numberfigure][sosedi[sos]] === undefined){
                    dihanie[numberfigure][sosedi[sos]] = 1;
                    dihanieFinish[numberfigure].push(sosedi[sos]);
                    
                  }
                  
                } else if (testCordsForDih[sosedi[sos]] === yourColor){
                  console.log(numberfigure);
                  figures[numberfigure].push(sosedi[sos]);
                  checkStone(sosedi[sos]);
                }
              }
            }
  }
  const checkStoneOnFigures = function(stone){
    for(var i=0; i < figures.length; i++){
      for(var figure = 0; figure < figures[i].length; figure++){
          if(figures[i][figure] == stone){
            return i;
          }
      }
    }
  
    return false;
  };
  const getSosediForDih = function(point, yourColor){
    var columnStep = point[0];
    var rowStep = parseInt(point[1]+point[2]);
    var colorVrag = yourColor === "white" ? "black" : "white";
    let alpha = 'ABCDEFGHJKLMNOPQRSTUV'
    var numberColumn = alpha.indexOf(columnStep, 0);
  
    var arr = [];
  
    
    if(numberColumn-1 > -1){
      arr.push(alpha[numberColumn-1]+rowStep);
    }
    if(numberColumn+1 < 13){
      arr.push(alpha[numberColumn+1]+rowStep);
    }
    if(rowStep-1 > 0){
      arr.push(alpha[numberColumn]+(rowStep-1));
    }
    if(rowStep+1 <14){
      arr.push(alpha[numberColumn]+(rowStep+1));
    }
    
    return arr;
  }

  export default viewDih;