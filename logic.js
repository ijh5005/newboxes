"use strict";

//    ------ ---- OBJECTS ---- ------    //

//contains global variables
const globalVariable = {
  myTurn: true,       //track turns
  scored: false,      //tracks if someone scored
  endGame: false,     //indicates if we have reached the end endgame -> the computer performs different logic while in the endGame
  noLineArray: [],    //stores the ids of boxes with no borders highlighted
  oneLineArray: [],   //stores the ids of boxes with one border highlighted
  twoLinesArray: [],  //stores the ids of boxes with two borders highlighted
  threeLineArray: [], //stores the ids of boxes with three borders highlighted
};

//contains functions that handle the computer moves
const AI = {
  //handles the computer turn
  computerMove: () => {
    //update the lineArrays
    AI.lineClickArrayUpdate();
    //creates a delay time between each computer move
    setTimeout(function () {

      if (globalVariable.threeLineArray.length != 0){
        //cache the id and className of the box with 3 lines clicked
        //and pass it to the click obj
        const id = globalVariable.threeLineArray[0];
        const className = Filter.findOpenSide(id);
        //cache computer click object
        const obj = Filter.clickObj(id, className);
        //init the computer click
        lineClickHandler(obj);
      } else {
        //finds a safe box to click
        const safeBoxToClick = AI.safeBox();

        if(safeBoxToClick != null){
          //init the computer click
          lineClickHandler(safeBoxToClick);
        }
      }

    }, 500);
  },
  //updates the line arrays (help determine a move to make)
  lineClickArrayUpdate: () => {

    //reset the line indicator array to 0 to prepare them for updates
    globalVariable.noLineArray.length = 0;
    globalVariable.oneLineArray.length = 0;
    globalVariable.twoLinesArray.length = 0;
    globalVariable.threeLineArray.length = 0;

    //update the line indicator arrays
    data.map((data) => {
      if (data.linesClicked === 0) {
        globalVariable.noLineArray.push(data.id);
      } else if (data.linesClicked === 1) {
        globalVariable.oneLineArray.push(data.id);
      } else if (data.linesClicked === 2) {
        globalVariable.twoLinesArray.push(data.id);
      } else if (data.linesClicked === 3) {
        globalVariable.threeLineArray.push(data.id);
      }
    });

  },
  //set the end game boolean this tells the computer if we are on the endgame
  endGameClick: () => {
    if ((globalVariable.noLineArray.length === 0) && (globalVariable.oneLineArray.length === 0) && (globalVariable.threeLineArray.length === 0)) {
      globalVariable.endGame = true;
    }
  },
  //finds and selects a safe box to click -> if none, this init AI.endGameMove
  safeBox: () => {
    let safeBoxArray = [];
    let edgeBoxSafeBoxArray = [];
    let edgeBoxSafeSideArray = [];
    let safeBox;
    let objOne = { target: { } };
    let objTwo = { target: { } };

    const l = data.length;

    for(let i = 0; i < l; i++){
      //cache the adj box line count
      const topCount = data[i].surroundingBoxesLinesClicked.top;
      const rightCount = data[i].surroundingBoxesLinesClicked.right;
      const bottomCount = data[i].surroundingBoxesLinesClicked.bottom;
      const leftCount = data[i].surroundingBoxesLinesClicked.left;

      //determines if the box is a safe box click
      if( (data[i].isTaken === false)
          && (data[i].linesClicked < 2)
          && ( (topCount < 2 && topCount != null) || (rightCount < 2 && rightCount != null) || (bottomCount < 2 && bottomCount != null) || (leftCount < 2 && leftCount != null) ) ){
        safeBoxArray.push(i);
      }

      //check the edge boxes for safe boxes
      //all of the board positions that are on the side are set to a value other than "middle"
      if(data[i].boardPosition != "middle"){

        const thisBoxLines = data[i].linesClicked;
        const hasLessThanTwoLines = (thisBoxLines < 2);
        const boardPosition = data[i].boardPosition;

        //general function to be used later
        const cornerBox = (sideOne, sideTwo, position) => {
          const sideOneChild = $(".grid[id=" + position + "]").children("." + sideOne);
          const sideTwoChild = $(".grid[id=" + position + "]").children("." + sideTwo);

          const sideOneIsClicked = sideOneChild[0].className.includes("clicked");
          const sideTwoIsClicked = sideTwoChild[0].className.includes("clicked");

          if ( !sideOneIsClicked ) {

            safeBoxArray.push(position);
            edgeBoxSafeBoxArray.push(position);
            edgeBoxSafeSideArray[position] = sideOne;

          }

          if ( !sideTwoIsClicked ) {

            safeBoxArray.push(position);
            edgeBoxSafeBoxArray.push(position);
            edgeBoxSafeSideArray[position] = sideTwo;

          }
        }
        //general function to be used later
        const sideBox = (side, position) => {
          const sideChild = $(".grid[id=" + position + "]").children("." + side);
          const sideIsClicked = sideChild[0].className.includes("clicked");
          if ( !sideIsClicked ) {
            safeBoxArray.push(position);
            edgeBoxSafeBoxArray.push(position);
            edgeBoxSafeSideArray[position] = side;
          }
        }

        if ( ( boardPosition === "topLeft") && hasLessThanTwoLines ) {
          cornerBox("top", "left", i);
        } else if ( ( boardPosition === "topRight") && hasLessThanTwoLines  ) {
          cornerBox("top", "right", i);
        } else if ( ( boardPosition === "bottomRight") && hasLessThanTwoLines ) {
          cornerBox("bottom", "right", i);
        } else if ( ( boardPosition === "bottomLeft") && hasLessThanTwoLines ) {
          cornerBox("bottom", "left", i);
        } else if ( ( boardPosition === "top") && hasLessThanTwoLines ) {
          sideBox("top", i);
        } else if ( ( boardPosition === "right") && hasLessThanTwoLines ) {
          sideBox("right", i);
        } else if ( ( boardPosition === "bottom") && hasLessThanTwoLines ) {
          sideBox("bottom", i);
        } else if ( ( boardPosition === "left") && hasLessThanTwoLines ) {
          sideBox("left", i);
        }

      } // end: if(data[i].boardPosition != "middle"){

    }

    const safeBoxArrayLength = safeBoxArray.length;

    //choose a random box in the safeBoxArray
    const randomBox = Math.floor( Math.random() * ( safeBoxArrayLength ) );

    //cache a clickBox to return in an object
    const clickBox = safeBoxArray[randomBox];

    //init two objs to choice from -> obj1 is for the side boxes and obj2 is for the middle boxes
    let obj1 = null;
    let obj2 = null;

    if(edgeBoxSafeBoxArray.indexOf(clickBox) != -1){
      //sets a click object option
      obj1 = Filter.objAssemble(objOne, clickBox, edgeBoxSafeSideArray[clickBox]);
    }

    //run only if there is a click box that is safe to click -> clickbox will be undefined if there was no clickbox found
    if(clickBox != undefined){
      //cache a clickSide to return in an object
      const clickSide = Filter.findClickSide(clickBox);
      //sets a click object option
      obj2 = Filter.objAssemble(objTwo, clickBox, clickSide);
    }

    //selects one of the click objs (obj1 or obj2) to give to the computer
    //there are two options because the side boxs' click obj had to get calculated seperately from the middles boxs' click obj
    //Math.random() makes the click seem random
    if((obj1 != null) && (obj2 != null)){
      if(Math.random() < 0.5){
        return obj1;
      } else {
        return obj2;
      }
    } else if (obj1 != null) {
      return obj1;
    } else if (obj2 != null) {
      return obj2;
    } else {
      //if there is no click obj init the endgame
      AI.endGameMove();
    }

  },
  //end game moves
  endGameMove: () => {
    //toggle inPath for any box with two lines
    data.map((d) => {
      if(d.linesClicked === 2){ d.inPath = true }
    });

    //init a mini array
    let miniArray = [];

    data.map((d) => {
      if((d.inPath === true) && (d.isTaken === false)){
        let mini = [];
        mini.push(d.id);
        //cache surrounding boxes location
        const top = d.surroundingBoxes.top;
        const right = d.surroundingBoxes.right;
        const bottom = d.surroundingBoxes.bottom;
        const left = d.surroundingBoxes.left;

        //cache surroundingBoxes inPath value
        //surroundingBoxes have an inPath of true it is connected to this box
        if(top != undefined){
          const topInPath = data[top].inPath;
          if(topInPath){ mini.push(top) }
        }
        if(right != undefined){
          const rightInPath = data[right].inPath;
          if(rightInPath){ mini.push(right) }
        }
        if(bottom != undefined){
          const bottomInPath = data[bottom].inPath;
          if(bottomInPath){ mini.push(bottom) }
        }
        if(left != undefined){
          const leftInPath = data[left].inPath;
          if(leftInPath){ mini.push(left) }
        }

        miniArray.push(mini);

      }

    });

    let pathAmount = Filter.removeDoubles(miniArray);
    pathAmount = Filter.removeEmptyArrays(pathAmount);
    pathAmount = Filter.removeDoubles(pathAmount);
    pathAmount = Filter.removeEmptyArrays(pathAmount);
    pathAmount = Filter.removeDoubles(pathAmount);
    pathAmount = Filter.removeEmptyArrays(pathAmount);
    pathAmount = Filter.removeDoubles(pathAmount);

    pathAmount.map((p, i) => {
      pathAmount[i] = Filter.removeDoublesInArray(p);
    });

    pathAmount.sort(function (a, b) {
      return a.length - b.length;
    });

    const id = pathAmount[0][0];
    const side = Filter.findSide(id);
    console.log(id);
    console.log(side);
    turnHandle(id, side);

  },

}

//contains functions that changes the dom
const domManipulation = {
  borderHighlight: (id, side) => {
    //cache the clicked side
    const $clickedSide = $("div[data=clickBox][class=" + side + "][id=" + id + "]");

    //add a click indicator and change the boxes' border color
    //border color = background color of the div representing the border
    //click indicator = class name "clicked"
    $clickedSide.css("backgroundColor", "#333").addClass("clicked");
  },

  fillAdjBoxBorderIfAny: (id, side, adjSide) => {
    //cache the adj box side id
    const adjId = data[id].surroundingBoxes[side];
    const hasAdjBox = (adjId != null);
    //if there is an adj box, fill the border of the adj box -> if not adj will equal null
    if (hasAdjBox) {
      domManipulation.borderHighlight(adjId, adjSide)

      //update the array
      dataUpdate(adjId, adjSide);

      //fill the box if there are 4 lines clicked
      domManipulation.fillBox(adjId);
    }
  },

  fillBox: (id) => {
    //fill the box if thereare 4 lines clicked
    if(data[id].linesClicked === 4){
      if(!globalVariable.myTurn){
        //the box is filled with the computer's color
        $(".grid[id=" + id + "]").css("backgroundColor", "black");
      } else {
        //the box is filled with the player's color
        $(".grid[id=" + id + "]").css("backgroundColor", "grey");
      }

      //indicates that there was a score
      globalVariable.scored = true;
    }
  }

};

//contains functions that filter
const Filter = {
  clickObj: (id, className) => {
    //init the computer click object
    let obj = { target: { } };

    //create the computer click object
    obj.target.id = id;
    obj.target.className = className;
    obj.computerInitiated = true;

    return obj;
  },
  returnOppositeSide: (side) => {
    if (side === "top") { return "bottom" }
    else if (side === "right") { return "left" }
    else if (side === "bottom") { return "top" }
    else if (side === "left") { return "right" }
  },
  findOpenSide: (id) => {
    let openLine;
    const dataChildConnected = data[id].connectedBoxes;
    //cache the child that wasn't clicked
    let children = $(".grid[id=" + id + "]").children("[class!='top clicked'][class!='right clicked'][class!='bottom clicked'][class!='left clicked']");
    //cache the class name of the the child object
    return children[0].className;
  },
  objAssemble: (obj, clickBox, clickSide) => {
    obj.target.id = clickBox;
    obj.target.className = clickSide;
    obj.computerInitiated = true;

    return obj;
  },
  //find the safe side to clickBox
  findClickSide: (clickBox) => {
    //cache the adj box line count
    const topCount = data[clickBox].surroundingBoxesLinesClicked.top;
    const rightCount = data[clickBox].surroundingBoxesLinesClicked.right;
    const bottomCount = data[clickBox].surroundingBoxesLinesClicked.bottom;
    const leftCount = data[clickBox].surroundingBoxesLinesClicked.left;

    const top = $(".grid[id=" + clickBox + "]").children(".top");
    const right = $(".grid[id=" + clickBox + "]").children(".right");
    const bottom = $(".grid[id=" + clickBox + "]").children(".bottom");
    const left = $(".grid[id=" + clickBox + "]").children(".left");

    //used to make computer chose a different line click other than "top" all the time
    const random = Math.floor( Math.random() * ( 2 ) );

    if (random < 1) {
      if ( (topCount < 2) && (top[0].className != "top clicked" )) {
        return "top"
      } else if ( (rightCount < 2) && (right[0].className != "right clicked" )) {
        return "right"
      } else if ( (bottomCount < 2) && (bottom[0].className != "bottom clicked" )) {
        return "bottom"
      } else if ( (leftCount < 2) && (left[0].className != "left clicked" )) {
        return "left"
      }
    } else {
      if ( (rightCount < 2) && (right[0].className != "right clicked" )) {
        return "right"
      } else if ( (bottomCount < 2) && (bottom[0].className != "bottom clicked" )) {
        return "bottom"
      } else if ( (leftCount < 2) && (left[0].className != "left clicked" )) {
        return "left"
      } else if ( (topCount < 2) && (top[0].className != "top clicked" )) {
        return "top"
      }
    }

  },
  removeDoubles: (obj) => {
    let pathAmount = [];
    obj.map(() => { pathAmount.push([]) });
    const usedIndexes = [];

    pathAmount.map((p, i) => {
      obj.map((m, j) => {
        if(usedIndexes.indexOf(j) === -1){
          if((pathAmount[i].length === 0)){
            pathAmount[i] = m;
            usedIndexes.push(j);
          } else {

            let inArray = pathAmount[i].some((element) => {
            	return m.indexOf(element) != -1;
            });

            if( inArray ){
              let temp = pathAmount[i].concat(m);
              pathAmount[i] = temp;
              usedIndexes.push(j);
            }
          }
        }
      });
    });

    return pathAmount;

  },
  removeEmptyArrays: (array) => {
    let filtered = [];
    array.map((p) => {
      if(p.length != 0){
        filtered.push(p);
      }
    });
    return filtered;
  },
  removeDoublesInArray: (array) => {
    let filtered = [];
    array.map((a) => {
      if(filtered.indexOf(a) === -1){
        filtered.push(a);
      }
    });
    return filtered;
  },
  findSide: (id) => {
    const isTopClicked = data[id].isTopClicked;
    const isRightClicked = data[id].isRightClicked;
    const isBottomClicked = data[id].isBottomClicked;
    const isLeftClicked = data[id].isLeftClicked;

    if(!isTopClicked){ return "top" }
    else if(!isRightClicked){ return "right" }
    else if(!isBottomClicked){ return "bottom" }
    else if(!isLeftClicked){ return "left" }
  }

};

//    ------ ---- END: OBJECTS ---- ------    //

const dataUpdate = (id, className) => {

  // -------------------- update data.linesClicked ----------------------------------------------------------
  //cache the current line click number and new line click number (current + 1)
  const currentLineClickNumber = data[id].linesClicked;
  const newLineClickNumber = currentLineClickNumber + 1;
  //set the new line click number
  data[id].linesClicked = newLineClickNumber;
  //----------------------------------------------------------------------------------------------------------
  // -------------------- update data.isTaken ----------------------------------------------------------------
  if(data[id].linesClicked === 4){ data[id].isTaken = true }
  //----------------------------------------------------------------------------------------------------------
  // -------------------- update data.connectedBoxes ---------------------------------------------------------
  data[id].connectedBoxes[className] = false; //////////////////change name
  //----------------------------------------------------------------------------------------------------------
  // -------------------- update data.surroundingBoxes -------------------------------------------------------
  data[id].surroundingBoxes[className] = null;
  //----------------------------------------------------------------------------------------------------------
  // -------------------- update data.is*Clicked -------------------------------------------------------------
  if (className === "top") { data[id].isTopClicked = true }
  else if (className === "right") { data[id].isRightClicked = true }
  else if (className === "bottom") { data[id].isBottomClicked = true }
  else if (className === "left") { data[id].isLeftClicked = true }
  //----------------------------------------------------------------------------------------------------------
  // -------------------- update data.surroundBoxLineClickUpdate ---------------------------------------------
  //handles the surrounding box line click update
  const surroundBoxLineClickUpdate = (thisSide, adjSide) => {
    //cache the adj box location
    const adjPosition = data[id].surroundingBoxes[thisSide];
    //cache the number of lines of both this box and it's adj box
    const thisBoxLineCount = data[id].linesClicked;
    const adjBoxLineCount = data[adjPosition].linesClicked;
    //set both the adj box location and this loation's surroundingBoxesLinesClicked field
    data[id].surroundingBoxesLinesClicked[thisSide] = adjBoxLineCount;
    data[adjPosition].surroundingBoxesLinesClicked[adjSide] = thisBoxLineCount;
  }

  data[id].surroundingBoxesLinesClicked[className] = null;

  if (data[id].surroundingBoxesLinesClicked.top != null) { surroundBoxLineClickUpdate("top", "bottom") }
  if (data[id].surroundingBoxesLinesClicked.right != null) { surroundBoxLineClickUpdate("right", "left") }
  if (data[id].surroundingBoxesLinesClicked.bottom != null) { surroundBoxLineClickUpdate("bottom", "top") }
  if (data[id].surroundingBoxesLinesClicked.left != null) { surroundBoxLineClickUpdate("left", "right") }
  //----------------------------------------------------------------------------------------------------------
}

const turnHandle = (id, side) => {

  //highlight the clicked border
  domManipulation.borderHighlight(id, side);

  //cache adjSide for an opposite side fill -> return "bottom" if side === "top"
  const adjSide = Filter.returnOppositeSide(side);
  //fill the opposite side if the box has an adj box next to the border side clicked
  domManipulation.fillAdjBoxBorderIfAny(id, side, adjSide);

  //update the data array
  dataUpdate(id, side);

  //fill the box if there are 4 lines clicked
  domManipulation.fillBox(id);

  //tells whos turn it is
  updateTurn();

  if(!globalVariable.myTurn){
    //init computer turn
    AI.computerMove();
  }

}

const lineClickHandler = (e) => {

  //cache current click box id and class
  const id = e.target.id;
  const className = e.target.className;

  //cache a clicked check -> this is false if the line has NOT been clicked (if doesn't include a clicked class)
  const isClicked = className.includes("clicked");

  //continue only if the side isn't already clicked -> if the side was clicked it will have include a "clicked" class name
  if ( !isClicked ) {

    //true if player ONE made the move and it is the player ONE turn
    const playerOne = globalVariable.myTurn;
    //true if player TWO made the move and it is the player TWO turn
    const playerTwo = (!globalVariable.myTurn && (e.computerInitiated === true));
    // prevent out of turn plays
    if( playerTwo || playerOne){
      turnHandle(id, className);
    }

  }

}

//handles the update of turns
const updateTurn = () => {

  //change the turn if the turn player did not score
  if(!globalVariable.scored){
    globalVariable.myTurn = !globalVariable.myTurn;
  }

  //reset the score indicator
  globalVariable.scored = false;

};

//fires only if it is playerOne turn
$(".top, .right, .bottom, .left").click((e) => { if(globalVariable.myTurn) { lineClickHandler(e) } });


const data = [{
    id: 0,
    location: 0,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
      top: null,
      right: 1,
      bottom: 4,
      left: null
    },
    surroundingBoxesLinesClicked: {
      top: null,
      right: 0,
      bottom: 0,
      left: null
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
      top: null,
      right: true,
      bottom: true,
      left: null
    },
    boardPosition: "topLeft",
    inPath: false,
  }, {
    id: 1,
    location: 1,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
      top: null,
      right: 2,
      bottom: 5,
      left: 0
    },
    surroundingBoxesLinesClicked: {
      top: null,
      right: 0,
      bottom: 0,
      left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
      top: null,
      right: true,
      bottom: true,
      left: true
    },
    boardPosition: "top",
    inPath: false,
  }, {
    id: 2,
    location: 2,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
      top: null,
      right: 3,
      bottom: 6,
      left: 1
    },
    surroundingBoxesLinesClicked: {
      top: null,
      right: 0,
      bottom: 0,
      left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
      top: null,
      right: true,
      bottom: true,
      left: true
    },
    boardPosition: "top",
    inPath: false,
  }, {
    id: 3,
    location: 3,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
      top: null,
      right: null,
      bottom: 7,
      left: 2
    },
    surroundingBoxesLinesClicked: {
      top: null,
      right: null,
      bottom: 0,
      left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
      top: null,
      right: null,
      bottom: true,
      left: true
    },
    boardPosition: "topRight",
    inPath: false,
  }, {
    id: 4,
    location: 4,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
      top: 0,
      right: 5,
      bottom: 8,
      left: null
    },
    surroundingBoxesLinesClicked: {
      top: 0,
      right: 0,
      bottom: 0,
      left: null
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
      top: true,
      right: true,
      bottom: true,
      left: null
    },
    boardPosition: "left",
    inPath: false,
  }, {
    id: 5,
    location: 5,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
      top: 1,
      right: 6,
      bottom: 9,
      left: 4
    },
    surroundingBoxesLinesClicked: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
      top: true,
      right: true,
      bottom: true,
      left: true
    },
    boardPosition: "middle",
    inPath: false,
  }, {
    id: 6,
    location: 6,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
      top: 2,
      right: 7,
      bottom: 10,
      left: 5
    },
    surroundingBoxesLinesClicked: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
      top: true,
      right: true,
      bottom: true,
      left: true
    },
    boardPosition: "middle",
    inPath: false,
  }, {
    id: 7,
    location: 7,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
      top: 3,
      right: null,
      bottom: 11,
      left: 6
    },
    surroundingBoxesLinesClicked: {
      top: 0,
      right: null,
      bottom: 0,
      left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
      top: true,
      right: null,
      bottom: true,
      left: true
    },
    boardPosition: "right",
    inPath: false,
  }, {
    id: 8,
    location: 8,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
      top: 4,
      right: 9,
      bottom: 12,
      left: null
    },
    surroundingBoxesLinesClicked: {
      top: 0,
      right: 0,
      bottom: 0,
      left: null
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
      top: true,
      right: true,
      bottom: true,
      left: null
    },
    boardPosition: "left",
    inPath: false,
  }, {
    id: 9,
    location: 9,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
      top: 5,
      right: 10,
      bottom: 13,
      left: 8
    },
    surroundingBoxesLinesClicked: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
      top: true,
      right: true,
      bottom: true,
      left: true
    },
    boardPosition: "middle",
    inPath: false,
  }, {
    id: 10,
    location: 10,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
      top: 6,
      right: 11,
      bottom: 14,
      left: 9
    },
    surroundingBoxesLinesClicked: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
      top: true,
      right: true,
      bottom: true,
      left: true
    },
    boardPosition: "middle",
    inPath: false,
  }, {
    id: 11,
    location: 11,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
      top: 7,
      right: null,
      bottom: 15,
      left: 10
    },
    surroundingBoxesLinesClicked: {
      top: 0,
      right: null,
      bottom: 0,
      left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
      top: true,
      right: null,
      bottom: true,
      left: true
    },
    boardPosition: "right",
    inPath: false,
  }, {
    id: 12,
    location: 12,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
      top: 8,
      right: 13,
      bottom: null,
      left: null
    },
    surroundingBoxesLinesClicked: {
      top: 0,
      right: 0,
      bottom: null,
      left: null
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
      top: true,
      right: true,
      bottom: null,
      left: null
    },
    boardPosition: "bottomLeft",
    inPath: false,
  }, {
    id: 13,
    location: 13,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
      top: 9,
      right: 14,
      bottom: null,
      left: 12
    },
    surroundingBoxesLinesClicked: {
      top: 0,
      right: 0,
      bottom: null,
      left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
      top: true,
      right: true,
      bottom: null,
      left: true
    },
    boardPosition: "bottom",
    inPath: false,
  }, {
    id: 14,
    location: 14,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
      top: 10,
      right: 15,
      bottom: null,
      left: 13
    },
    surroundingBoxesLinesClicked: {
      top: 0,
      right: 0,
      bottom: null,
      left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
      top: true,
      right: true,
      bottom: null,
      left: true
    },
    boardPosition: "bottom",
    inPath: false,
  }, {
    id: 15,
    location: 15,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
      top: 11,
      right: null,
      bottom: null,
      left: 14
    },
    surroundingBoxesLinesClicked: {
      top: 0,
      right: null,
      bottom: null,
      left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
      top: true,
      right: null,
      bottom: null,
      left: true
    },
    boardPosition: "bottomRight",
    inPath: false,
}];
